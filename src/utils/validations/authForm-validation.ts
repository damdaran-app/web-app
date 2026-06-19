import * as Yup from "yup";
export const signUpValidationSchema = Yup.object({
  emailOrPhoneNumber: Yup.string()
    .required("ایمیل الزامی است")
    .test(
      "email-or-phone",
      "ایمیل یا شماره موبایل معتبر نیست",
      (value) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value || "") ||
        /^09\d{9}$/.test(value || ""),
    ),

  password: Yup.string()
    .min(8, "حداقل ۸ کاراکتر")
    .required("رمز عبور الزامی است"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "رمز عبور یکسان نیست")
    .required("تکرار رمز عبور الزامی است"),
});

export const signInValidationSchema = Yup.object({
  emailOrPhoneNumber: Yup.string()
    .required("ایمیل الزامی است")
    .test(
      "email-or-phone",
      "ایمیل یا شماره موبایل معتبر نیست",
      (value) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value || "") ||
        /^09\d{9}$/.test(value || ""),
    ),

  password: Yup.string()
    .min(8, "حداقل ۸ کاراکتر")
    .required("رمز عبور الزامی است"),
});
