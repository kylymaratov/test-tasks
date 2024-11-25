import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    orderId: { type: String, required: true, unique: true },
    tokenA: { type: String, required: true },
    tokenB: { type: String, required: true },
    user: { type: String, required: true },
    amountA: { type: Number, required: true },
    amountB: { type: Number, required: true },
    type: { type: String, enum: ['market', 'limit'], required: true },
    side: { type: String, enum: ['buy', 'sell'], required: true },
    filled: { type: Number, default: 0 },
    active: { type: Boolean, default: true },
  },
  { timestamps: true },
);

export const OrderModel = mongoose.model('orders', orderSchema);
