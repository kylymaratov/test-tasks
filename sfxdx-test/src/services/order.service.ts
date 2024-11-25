import { OrderModel } from '@/database/models/order.model';
import bindClassMethods from '@/utils/bind.class.methods';
import { NextFunction, Request, Response } from 'express';

export class OrderService {
  constructor() {
    bindClassMethods(this);
  }

  async getOrders(req: Request, res: Response, next: NextFunction) {
    try {
      const { tokenA, tokenB, user, active } = req.query;

      const filters: any = {};

      if (tokenA || tokenB) {
        filters.$or = [tokenA && { tokenA }, tokenB && { tokenB }].filter(
          Boolean,
        );
      }

      if (user) filters.user = user;

      filters.active = active === 'true';

      const orders = await OrderModel.find(filters);

      res.json({ message: 'Orders', orders, filters });
    } catch (error) {
      next(error);
    }
  }

  async getMatchingOrders(req: Request, res: Response, next: NextFunction) {
    try {
      const { tokenA, tokenB, amountA, amountB } = req.query;

      const filters: any = {};

      if (tokenA || tokenB) {
        filters.$or = [tokenA && { tokenA }, tokenB && { tokenB }].filter(
          Boolean,
        );
      }

      if (amountA && amountA !== '0')
        filters.amountA = { $gte: +Number(amountA) || 0 };
      if (amountB && amountB !== '0')
        filters.amountB = { $gte: +Number(amountB) || 0 };

      const orders = await OrderModel.find(filters);

      res.json({
        message: 'Matching orders',
        orders: orders.map((order) => order._id),
        filters,
      });
    } catch (error) {
      next(error);
    }
  }
}
