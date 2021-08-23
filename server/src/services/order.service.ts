import OrderRepository from '@/repositories/order.repository';
import OrderProductRepository from '@/repositories/orderProduct.repository';

class OrderService {
  async createOrder({
    user_id,
    products,
    status,
    delivery_request_message,
    address_id,
  }) {
    const orderRepo = OrderRepository();
    const result = await orderRepo.createOrder({
      user_id,
      products,
      status,
      delivery_request_message,
      address_id,
    });

    return {
      id: result?.generatedMaps[0].order_id,
    };
  }

  async getOrder({ id, user_id }) {
    const orderProductRepo = OrderProductRepository();
    const orderProducts = await orderProductRepo.getOrderProductsByOrderId(id);

    const orderRepo = OrderRepository();
    const order = await orderRepo.getOrder({ id, user_id });
    return {
      ...order,
      products: order.products.map((product) => ({
        id: product.id,
        img: product.productImage.find(
          (img) => img.isThumbnail && img.type === 'preload'
        )?.url,
        count: orderProducts.find(
          (orderProduct) => orderProduct.product_id === product.id
        ).count,
        title: product.title,
        price: product.price,
      })),
    };
  }

  async getOrders({ user_id, monthAgo }) {
    const orderRepo = OrderRepository();
    const orders = await orderRepo.getOrders({ monthAgo, user_id });
    const orderIds = orders.map((order) => order.id);

    const orderProductRepo = OrderProductRepository();
    const orderProducts = await orderProductRepo.getOrderProductsByOrderIds(
      orderIds
    );

    return orders.map((order) => ({
      ...order,
      products: order.products.map((product) => ({
        id: product.id,
        img: product.productImage.find(
          (img) => img.isThumbnail && img.type === 'preload'
        )?.url,
        count: orderProducts.find(
          (orderProduct) =>
            orderProduct.product_id === product.id &&
            orderProduct.order_id === order.id
        ).count,
        title: product.title,
        price: product.price,
      })),
    }));
  }
}

export default new OrderService();
