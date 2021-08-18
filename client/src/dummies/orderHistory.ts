export default [
  {
    value: 'wait',
    name: '입금대기',
    count: 0,
  },
  {
    value: 'paid',
    name: '결제완료',
    count: 0,
  },
  {
    value: 'preparing',
    name: '상품준비중',
    count: 0,
  },
  {
    value: 'delivering',
    name: '배송중',
    count: 0,
  },
  {
    value: 'delivered',
    name: '배송완료',
    count: 0,
  },
  {
    value: 'confirmed',
    name: '구매확정',
    count: 0,
  },
];

export const orderItemList = {
  '2021.08.13': {
    status: 'delivering',
    deliveredAt: null,

    items: [
      {
        id: 1,
        name: '반 반 휴지. 물 반 휴지 반',
        price: 8000,
        count: 2,
      },
      {
        id: 2,
        name: '반 반 휴지. 물 반 휴지 반',
        price: 8000,
        count: 2,
      },
    ],
  },
  '2021.05.12': {
    status: 'delivered',
    deliveredAt: '2021.08.15',
    items: [
      {
        id: 3,
        name: '반 반 휴지. 물 반 휴지 반',
        price: 8000,
        count: 2,
      },
    ],
  },
};
