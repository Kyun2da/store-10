interface IReviewValidation {
  content: string;
  rating: number;
  setContentError: (value: React.SetStateAction<boolean>) => void;
  setRatingError: (value: React.SetStateAction<boolean>) => void;
}

interface IQuestionValidation {
  content: string;
  title: string;
  setContentError: (value: React.SetStateAction<boolean>) => void;
  setTitleError: (value: React.SetStateAction<boolean>) => void;
}

export const validateInput = (value: string) => {
  return !!value;
};

export const validateEmail = (email: string) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const validatePassword = (password: string) => {
  const regex =
    /^(?=.*[A-Z])(?=.*[a-z])([^\s]){10,}|(?=.*[A-Z])(?=.*[0-9])([^\s]){10,}|(?=.*[A-Z])(?=.*[<>{}|;:.,~!?@#$%^=&*\”\\/])([^\s]){10,}|(?=.*[a-z])(?=.*[0-9])([^\s]){10,}|(?=.*[a-z])(?=.*[<>{}|;:.,~!?@#$%^=&*\”\\/])([^\s]){10,}|(?=.*[0-9])(?=.*[<>{}|;:.,~!?@#$%^=&*\”\\/])([^\s]){10,}$/;
  return regex.test(password);
};

export const validateRePassword = (password: string, rePassword: string) => {
  return password === rePassword && !!rePassword;
};

export const validateName = (name: string) => {
  return !!name;
};

export const validateAll = (
  email: string,
  password: string,
  rePassword: string,
  name: string
) => {
  if (
    validateEmail(email) &&
    validatePassword(password) &&
    validateRePassword(password, rePassword) &&
    validateName(name)
  ) {
    return true;
  }
  return false;
};

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

export const validateQuestion = ({
  content,
  title,
  setContentError,
  setTitleError,
}: IQuestionValidation) => {
  if (!content) {
    setContentError(true);
  } else {
    setContentError(false);
  }

  if (!title) {
    setTitleError(true);
  } else {
    setTitleError(false);
  }

  if (!content || !title) return false;
  return true;
};
