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
        const { orderId, tokenA, tokenB, user, amountA, amountB, type, side } =
          event.returnValues;
        await OrderModel.create({
          orderId,
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
        console.info('OrderCreated synced: ', orderId);
      }

      const matchedEvents = await this.contract.getPastEvents('OrderMatched', {
        fromBlock: lastCreatedOrder?.blockNumber,
        toBlock: 'latest',
      });

      for (const event of matchedEvents) {
        const { orderId, filled } = event.returnValues;
        await OrderModel.findOneAndUpdate(
          { orderId },
          { filled, active: filled === 1 },
        );
        console.info('OrderMatched synced: ', orderId);
      }

      const cancelledEvents = await this.contract.getPastEvents(
        'OrderCancelled',
        {
          fromBlock: lastCreatedOrder?.blockNumber,
          toBlock: 'latest',
        },
      );

      for (const event of cancelledEvents) {
        const { orderId } = event.returnValues;
        await OrderModel.findOneAndUpdate({ orderId }, { active: false });
        console.info('OrderCancelled synced: ', orderId);
      }
    } catch (error) {
      console.error('Error syncing orders:', error);
    }
  }

  async listenOrders() {
    this.contract.events.OrderCreated().on('data', async (event: any) => {
      try {
        const blockNumber = event.blockNumber; 
        const { orderId, tokenA, tokenB, user, amountA, amountB, type, side } =
          event.returnValues;

        await OrderModel.create({
          orderId,
          tokenA,
          tokenB,
          user,
          amountA,
          amountB,
          type,
          side,
          active: false,
          filled: 1,
          blockNumber
        });
        console.info('OrderCreated: ', orderId);
      } catch (error) {
        console.error(event.event, (error as Error).message);
      }
    });

    this.contract.events.OrderMatched().on('data', async (event: any) => {
      try {
        const { orderId, filled } = event.returnValues;
        await OrderModel.findOneAndUpdate(
          { orderId },
          { filled, active: filled === 1 },
        );
        console.info('OrderMatched: ', orderId);
      } catch (error) {
        console.error(event.event, (error as Error).message);
      }
    });

    this.contract.events.OrderCancelled().on('data', async (event: any) => {
      try {
        const { orderId } = event.returnValues;
        await OrderModel.findOneAndUpdate({ orderId }, { active: false });
        console.info('OrderCancelled: ', orderId);
      } catch (error) {
        console.error(event.event, (error as Error).message);
      }
    });
  }
}

export default Infura;
