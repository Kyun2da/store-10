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

export interface IProductImage {
  createdAt: string;
  updatedAt: string;
  id: number;
  url: string;
  isThumbnail: number;
  type: string;
  product_id: number;
}

export interface IProduct {
  createdAt: string;
  updatedAt: string;
  id: number;
  title: string;
  price: number;
  content: string | null;
  stock: number;
  sub_category_id: number;
  productImage: IProductImage[];
}

export interface ICart {
  count: number;
  createdAt: string;
  productId: number;
  title: string;
  price: number;
  image: string;
}

export interface IDetails {
  content: {
    details: string;
    essentials: string;
  };
  createdAt: string;
  id: number;
  price: string;
  stock: number;
  sub_category_id: number;
  title: string;
}

export interface IThumbnails {
  id: number;
  isThumbnail: number;
  type: string;
  product_id: number;
  url: string;
  targetId: string;
}

export interface IProductDetail {
  details: IDetails;
  thumbnails: IThumbnails[];
}

export interface ISignUpUser {
  user_id: string;
  password: string;
  rePassword: string;
  name: string;
}

export interface ILoginUser {
  user_id: string;
  password: string;
}

export interface ISearchData {
  id: number;
  price: number;
  image: string;
  title: string;
}
