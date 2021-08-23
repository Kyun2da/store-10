import { Order } from '@/entities/order.entity';
import { OrderProduct } from '@/entities/orderProduct.entity';
import addMonth from '@/utils/addMonth';
import {
  EntityRepository,
  getCustomRepository,
  Repository,
  getManager,
  Between,
  Not,
} from 'typeorm';

interface IOrder {
  products: {
    count: number;
    id: number;
  }[];
  user_id: number;
  status: string;
  delivery_request_message?: string;
  address_id?: number;
}

@EntityRepository(Order)
class OrderRepository extends Repository<Order> {
  async createOrder({
    user_id,
    status,
    delivery_request_message,
    products,
    address_id,
  }: IOrder) {
    const _order = this.create({
      status,
      delivery_request_message,
      user_id,
      address_id,
    });

    const order = await this.save(_order);

    const OrderProductValues = products.map((product) => ({
      count: product.count,
      product_id: product.id,
      order_id: order.id,
    }));

    return getManager()
      .createQueryBuilder(OrderProduct, 'OrderProduct')
      .insert()
      .into(OrderProduct)
      .values(OrderProductValues)
      .execute();
  }

  async getOrder({ id, user_id }: { id: number; user_id: number }) {
    return this.findOne({
      where: { id, user_id },
      relations: ['products', 'products.productImage'],
    });
  }

  async getOrders({ user_id, year }: { user_id: number; year?: string }) {
    const DEFAULT_MONTH_AGO = 6;

    const startDate = year
      ? new Date(`${year}-01-01`)
      : addMonth(new Date(), -DEFAULT_MONTH_AGO);
    const endDate = year ? new Date(`${year}-12-31`) : new Date();

    console.log(startDate, endDate);
    return this.find({
      where: {
        user_id,
        status: Not('created'),
        createdAt: Between(startDate, endDate),
      },
      relations: ['products', 'products.productImage'],
    });
  }
}

export default () => getCustomRepository(OrderRepository);
