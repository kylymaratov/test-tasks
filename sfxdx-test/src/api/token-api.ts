import { OrderService } from '@/services/order.service';
import { Router } from 'express';

const tokenApi = Router();
const orderService = new OrderService();

tokenApi.get('/getOrders', orderService.getOrders);
tokenApi.get('/getMatchingOrders', orderService.getMatchingOrders);

export default tokenApi;
