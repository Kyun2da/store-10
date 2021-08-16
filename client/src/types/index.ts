export interface shoppingCartItem {
  id: number;
  title: string;
  price: number;
  count: number;
  isChekced: boolean;
  deliveryFee: number;
  discount: number;
}

export interface IAddressData {
  id: number;
  name: string;
  postcode: string;
  address: string;
  detailAddress: string;
  phone: string;
  message: string;
  isDefault: boolean;
}
