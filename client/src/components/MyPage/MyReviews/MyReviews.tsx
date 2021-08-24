import {
  ReviewImages,
  UserDescription,
  UserReview,
  UserReviewArea,
  UserReviewTitles,
} from '@/components/ProductDetails/styles';
import React from 'react';
import Title from '@/components/Shared/Title';
import { RatingGetter } from '@/components/Shared/Rating';
import { dateFormat } from '@/utils/helper';
import { nanoid } from 'nanoid';
import { useGetProductReviewsByUser } from '@/hooks/queries/product/index';
import usePagination from '@/hooks/usePagination';

const MyReviews = () => {
  const [offset, handleOnClickPage] = usePagination(LIMIT);
  const {
    data: reviews,
    isLoading,
    error,
  } = useGetProductReviewsByUser(offset);

  // 이 부분에 대한 공통 화면도 만들 수 있다면 좋을 거 같네요~
  if (error) {
    return <div>{error.message}</div>;
  }

  if (isLoading || !reviews) {
    return <div>loading</div>;
  }

  return (
    <UserReviewArea>
      {reviews.map((review) => {
        return (
          <UserReview data-review-id={review.id} key={review.id}>
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
        );
      })}
    </UserReviewArea>
  );
};

export default MyReviews;
