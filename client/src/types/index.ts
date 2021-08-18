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

export interface IUser {
  id: number;
  user_id: string;
  name: string;
}
