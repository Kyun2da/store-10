import { Order } from '@/entities/order.entity';
import { EntityRepository, getCustomRepository, Repository } from 'typeorm';

@EntityRepository(Order)
class OrderRepository extends Repository<Order> {
  getBestProductIds(lmit: number) {
    return this.createQueryBuilder('order')
      .select('order.product_id')
      .groupBy('order.product_id')
      .orderBy('COUNT(order.product_id)', 'DESC')
      .take(lmit)
      .getRawMany();
  }
}

export default () => getCustomRepository(OrderRepository);
