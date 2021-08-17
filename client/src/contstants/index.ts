export const MY_PAGE_NAVIGATIONS = [
  { value: 'orderHistroy', name: '주문 내역' },
  { value: 'address', name: '배송지 관리' },
  { value: 'coupon', name: '쿠폰' },
  { value: 'inqurey', name: '상품 문의' },
  { value: 'review', name: '상품 후기' },
];

export const FRUSTRATE_IMG =
  'https://store-10.s3.ap-northeast-2.amazonaws.com/test/frustrate.png';

interface IORDER_STATUS {
  [index: string]: string;
  wait: string;
  paid: string;
  preparing: string;
  delivering: string;
  delivered: string;
  confirmed: string;
}

export const ORDER_STATUS: IORDER_STATUS = {
  wait: '입금대기',
  paid: '결제완료',
  preparing: '상품준비중',
  delivering: '배송중',
  delivered: '배송완료',
  confirmed: '구매확정',
};
