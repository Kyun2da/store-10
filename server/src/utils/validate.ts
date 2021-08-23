export const validatePassword = (password: string) => {
  const regex =
    /^(?=.*[A-Z])(?=.*[a-z])([^\s]){10,}|(?=.*[A-Z])(?=.*[0-9])([^\s]){10,}|(?=.*[A-Z])(?=.*[<>{}|;:.,~!?@#$%^=&*\”\\/])([^\s]){10,}|(?=.*[a-z])(?=.*[0-9])([^\s]){10,}|(?=.*[a-z])(?=.*[<>{}|;:.,~!?@#$%^=&*\”\\/])([^\s]){10,}|(?=.*[0-9])(?=.*[<>{}|;:.,~!?@#$%^=&*\”\\/])([^\s]){10,}$/;
  return regex.test(password);
};

export const validatePhone = (phone: string) => {
  const regex = /[0-9]{2,3}-[0-9]{3,4}-[0-9]{3,4}/;
  return regex.test(phone);
};

export const validatePostcode = (postcode: string) => {
  const regex = /[0-9]{5,6}/;
  return regex.test(postcode);
};
