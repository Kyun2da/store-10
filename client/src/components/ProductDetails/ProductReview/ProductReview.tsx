import Rating from '@/components/Rating';
import RatingChart from '@/components/RatingChart';
import Title from '@/components/Title';
import React from 'react';
import * as S from '../styles';
import Button from '@/components/Button';
// import useModal from '@/hooks/useModal';

// TODO: 임시 데이터 형식입니다 - 당연히 나중에 바뀌게쬬?
const dummyDataExample = [
  {
    username: '우아하지못한나',
    review: '흑과백으로 눈에 잘띄고ㅋ 활용도는 좋을꺼같네요',
    rating: 4.5,
    createdAt: '2021-08-15',
    images: [
      'https://store.baemin.com/data/board/upload/goodsreview/f704b99aa715c362',
      'https://store.baemin.com/data/board/upload/goodsreview/3bcf6180198fc727',
    ],
  },
  {
    username: '우아한멍멍이',
    review: 'ㅋㅋㅋ 귀엽네요. 사이즈가 작아요.',
    rating: 4,
    createdAt: '2021-08-14',
    images: [],
  },
  {
    username: '우아한방랑자',
    review:
      '와 진짜 칫솔 유목민이었는데 이제 정착합니다ㅜㅜㅜㅜ 칫솔 크기가 일반 칫솔보다 커서 이 닦는데 넓게 닦여 편합니다. 또 제거 치열이 고르지 못하고 잇몸이 민감한 편인데도 불구하고 잇몸에 전혀 부담없이 개운하게 닦이네요ㅎㅎ 재구매하여 모든 가족들 칫솔 바꿔주려구요!',
    createdAt: '2021-08-13',
    rating: 3.5,
    images: [],
  },
];

interface IProductReview {
  totalRating: number;
}

const ProductReview = ({ totalRating }: IProductReview) => {
  // const [isOpen, toggleModal] = useModal(false);
  return (
    <S.PanelWrapper>
      <S.TopArea>
        <Title className="title" level={5}>
          상품후기 ({dummyDataExample.length})
        </Title>
        <Button size="Default" color="primary" type="button">
          작성하기
        </Button>
      </S.TopArea>
      <S.RatingArea>
        <S.StarRates>
          <span className="totalRates">{totalRating}</span>
          <Rating rating={totalRating} uniqueId="totalRating" />
        </S.StarRates>
        <RatingChart />
      </S.RatingArea>

      <S.UserReviewArea>
        {dummyDataExample.map((data) => {
          // 후... 그냥 uuid 깔까..
          const tempRandomString = Math.random().toString(30).substr(2, 11);
          return (
            <S.UserReview key={tempRandomString}>
              <S.UserReviewTitles>
                <Title className="username" level={5}>
                  {data.username}
                  <span style={{ fontWeight: 100 }}>님</span>
                </Title>
                <Rating rating={data.rating} uniqueId={tempRandomString} />
                {/* DayJS를 쓸까요? DayJS를 씁시다아아아 */}
                <p className="date">{data.createdAt}</p>
              </S.UserReviewTitles>

              {data.images.length !== 0 && (
                <S.ReviewImages>
                  {data.images.map((image, idx) => (
                    <img
                      key={tempRandomString + idx}
                      src={image}
                      alt="유저사진리뷰"
                    />
                  ))}
                </S.ReviewImages>
              )}

              <S.UserDescription>{data.review}</S.UserDescription>
            </S.UserReview>
          );
        })}
      </S.UserReviewArea>
    </S.PanelWrapper>
  );
};

export default ProductReview;
