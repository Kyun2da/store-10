import {
  ReviewImages,
  UserDescription,
  UserReview,
  UserReviewArea,
  UserReviewTitles,
} from '@/components/ProductDetails/styles';
import React, { useState } from 'react';
import * as S from './styles';
import Title from '@/components/Shared/Title';
import { RatingGetter } from '@/components/Shared/Rating';
import { dateFormat } from '@/utils/helper';
import { nanoid } from 'nanoid';
import { useGetProductReviewsByUser } from '@/hooks/queries/product/index';
import usePagination from '@/hooks/usePagination';
import { REVIEW_LIMIT } from '@/utils/constant/offsetLimit';
import Pagination from '@/components/Shared/Pagination';
import { ReviewImageModal } from '@/components/Shared/Modal';
import useModal from '@/hooks/useModal';
import { Link } from '@/lib/Router';

const MyReviews = () => {
  const [offset, handleOnClickPage] = usePagination(REVIEW_LIMIT);
  const { data, isLoading, error } = useGetProductReviewsByUser(offset);
  const [selectedImage, setSelectedImage] = useState('');
  const [isImageOpen, toggleImageModal] = useModal(false);

  // 이 부분에 대한 공통 화면도 만들 수 있다면 좋을 거 같네요~
  if (error) {
    return <div>{error.message}</div>;
  }

  if (isLoading || !data) {
    return <div>loading</div>;
  }

  const handleOnClickImage = (image: string) => {
    setSelectedImage(image);
    toggleImageModal();
  };

  const { reviews, count } = data;

  console.log(reviews);

  return (
    <S.MyReviews>
      <UserReviewArea>
        {reviews.map((review) => {
          return (
            <S.MyReviewsItem key={review.id}>
              <S.ThumbnailArea>
                <S.ProductThumbnail
                  src={review.productImage_url}
                  alt="상품 섬네일"
                />
                <Link to={`/detail/${review.product_id}`}>
                  <S.LinkButton>이동</S.LinkButton>
                </Link>
              </S.ThumbnailArea>
              <UserReview data-review-id={review.id}>
                <UserReviewTitles>
                  <Title className="username" level={5}>
                    {review.name}
                    <span style={{ fontWeight: 100 }}>님</span>
                  </Title>
                  <div className="rating-area">
                    <RatingGetter rating={review.rating} uniqueId={nanoid()} />
                    <p className="date">{dateFormat(review.createdAt)}</p>
                  </div>
                </UserReviewTitles>

                {review.url.length !== 0 && (
                  <ReviewImages>
                    {review.url.map((image) => (
                      <img
                        onClick={() => handleOnClickImage(image)}
                        key={nanoid()}
                        src={image}
                        alt="유저사진리뷰"
                      />
                    ))}
                  </ReviewImages>
                )}

                <UserDescription>{review.content}</UserDescription>
              </UserReview>
            </S.MyReviewsItem>
          );
        })}
      </UserReviewArea>

      <Pagination
        handleOnClickPage={handleOnClickPage}
        count={Math.ceil(count / REVIEW_LIMIT)}
      />

      {isImageOpen && (
        <ReviewImageModal
          selectedImage={selectedImage}
          toggleModal={toggleImageModal}
        />
      )}
    </S.MyReviews>
  );
};

export default MyReviews;
