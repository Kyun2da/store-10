import dayjs from 'dayjs';

export const wonFormat = (number: number | string) => {
  let price: string;
  if (typeof number === 'number') {
    price = number.toLocaleString('ko-kr');
  }
  price = Number(number).toLocaleString('ko-kr');

  return price + '원';
};

export const dateFormat = (date: string) => {
  return dayjs(date).format('YYYY-MM-DD');
};
