interface IReviewValidation {
  content: string;
  rating: number;
  setContentError: (value: React.SetStateAction<boolean>) => void;
  setRatingError: (value: React.SetStateAction<boolean>) => void;
}

export const validateReview = ({
  content,
  rating,
  setContentError,
  setRatingError,
}: IReviewValidation) => {
  if (!content) {
    setContentError(true);
  } else {
    setContentError(false);
  }

  if (!rating) {
    setRatingError(true);
  } else {
    setRatingError(false);
  }

  if (!content || !rating) return false;
  return true;
};
