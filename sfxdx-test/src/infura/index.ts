import { OrderModel } from '@/database/models/order.model';
import Web3, { AbiItem, Contract } from 'web3';

class Infura extends Web3 {
  private contract: any;

  constructor(
    api_key: string,
    contract_abi: AbiItem[],
    contractAddress: string,
  ) {
    super(
      new Web3.providers.WebsocketProvider(
        'wss://mainnet.infura.io/ws/v3/' + api_key,
      ),
    );

    this.contract = new this.eth.Contract(contract_abi, contractAddress);
  }

  async syncOrders() {
    try {
      const lastCreatedOrder = await OrderModel.findOne().sort({
        createdAt: -1,
      });

      const events = await this.contract.getPastEvents('OrderCreated', {
        fromBlock: lastCreatedOrder?.blockNumber,
        toBlock: 'latest',
      });

      for (const event of events) {
        const { id, tokenA, tokenB, user, amountA, amountB, type, side } =
          event.returnValues;
        await OrderModel.create({
          orderId: id,
          tokenA,
          tokenB,
          user,
          amountA,
          amountB,
          type,
          side,
          active: false,
          filled: 1,
        });
        console.info('OrderCreated synced: ', id);
      }

      const matchedEvents = await this.contract.getPastEvents('OrderMatched', {
        fromBlock: lastCreatedOrder?.blockNumber,
        toBlock: 'latest',
      });

      for (const event of matchedEvents) {
        const { id, filled } = event.returnValues;
        await OrderModel.findOneAndUpdate(
          { orderId: id },
          { filled, active: filled === 1 },
        );
        console.info('OrderMatched synced: ', id);
      }

      const cancelledEvents = await this.contract.getPastEvents(
        'OrderCancelled',
        {
          fromBlock: lastCreatedOrder?.blockNumber,
          toBlock: 'latest',
        },
      );

      for (const event of cancelledEvents) {
        const { id } = event.returnValues;
        await OrderModel.findOneAndUpdate( { orderId: id },{ active: false });
        console.info('OrderCancelled synced: ', id);
      }
    } catch (error) {
      console.error('Error syncing orders:', error);
    }
  }

  async listenOrders() {
    this.contract.events.OrderCreated().on('data', async (event: any) => {
      try {
        const blockNumber = event.blockNumber; 
        const { id, tokenA, tokenB, user, amountA, amountB, isMarket } =
          event.returnValues;

        await OrderModel.create({
          orderId: id,
          tokenA,
          tokenB,
          user,
          amountA,
          amountB,
          isMarket,
          active: false,
          blockNumber
        });
        console.info('OrderCreated: ', id);
      } catch (error) {
        console.error(event.event, (error as Error).message);
      }
    });

    this.contract.events.OrderMatched().on('data', async (event: any) => {
      try {
        const { id, amountLeftToFill, amountReceived } = event.returnValues;
        await OrderModel.findOneAndUpdate(
          { orderId:id },
          { active: amountReceived === amountLeftToFill ? false : true },
        );
        console.info('OrderMatched: ', id);
      } catch (error) {
        console.error(event.event, (error as Error).message);
      }
    });

    this.contract.events.OrderCancelled().on('data', async (event: any) => {
      try {
        const { id } = event.returnValues;
        await OrderModel.findOneAndUpdate({ orderId: id }, { active: false });
        console.info('OrderCancelled: ', id);
      } catch (error) {
        console.error(event.event, (error as Error).message);
      }
    });
  }
}

export default Infura;
