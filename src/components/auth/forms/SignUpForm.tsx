"use client";
import { EyeIcon, LockIcon, UserIcon } from "@/assets/icons";
import CustomBtn from "@/components/CustomBtn";
import { samimBold } from "@/components/fonts";
import { errorMessageHandler } from "@/utils/hook";
import { signUpAction } from "@/utils/server-actions";
import { TAuthrization } from "@/utils/types/api-responses-types";
import { signUpValidationSchema } from "@/utils/validations";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { startTransition, useActionState, useEffect, useState } from "react";
import FormInput from "./FormInput";

const SignUpForm = () => {
  const router = useRouter();
  const [formInitialState] = useState<TAuthrization>({
    message: "",
  });
  const [state, action, pending] = useActionState(
    signUpAction,
    formInitialState,
  );

  const formik = useFormik({
    initialValues: {
      emailOrPhoneNumber: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signUpValidationSchema,
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append("emailOrPhoneNumber", values.emailOrPhoneNumber);
      formData.append("password", values.password);
      formData.append("confirmPassword", values.confirmPassword);
      startTransition(() => action(formData));
    },
  });

  useEffect(() => {
    if (state.message == "successfully") {
      errorMessageHandler({
        status: 400,
        message: { successMessage: "ثبت نام با موفقیت انجام شد" },
      });
      // toast.success("ثبت نام با موفقیت انجام شد", { position: "top-right" });
      setTimeout(() => router.push("/"), 500);
    } else if (state.message == "error") {
      errorMessageHandler({
        status: 400,
        message: { errorMessage: "کاربری با این شماره وجود دارد" },
      });
      // toast.error("کاربری با این شماره وجود دارد", { position: "top-right" });
    }
  }, [state, router]);

  return (
    <div className="w-full flex flex-col gap-y-9">
      <div className="title-control">
        <h1 className={`${samimBold.className} text-center text-xl`}>
          ایجاد حساب کاربری
        </h1>
        <p className="text-center text-xs mt-4">
          برای استفاده از خدمات سایت، حساب کاربری جدید ایجاد کنید.
        </p>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="input-control flex flex-col gap-y-8">
          <FormInput
            type="text"
            name="emailOrPhoneNumber"
            value={formik.values.emailOrPhoneNumber}
            onChange={formik.handleChange}
            changeType={false}
            placeholder="ایمیل یا شماره همراه خود را وارد کنید"
            leftIconIcon={<></>}
            rightIcon={<UserIcon size={20} />}
            errorMessage={
              formik.touched.emailOrPhoneNumber &&
              formik.errors.emailOrPhoneNumber
                ? formik.errors.emailOrPhoneNumber
                : ""
            }
          />
          <FormInput
            type="password"
            name="password"
            changeType={true}
            onChange={formik.handleChange}
            // value={formik.values.password}
            placeholder="رمز عبور خود را وارد کنید"
            leftIconIcon={<EyeIcon size={20} />}
            rightIcon={<LockIcon size={20} />}
            errorMessage={
              formik.touched.password && formik.errors.password
                ? formik.errors.password
                : ""
            }
          />
          <FormInput
            type="password"
            name="confirmPassword"
            changeType={true}
            onChange={formik.handleChange}
            // value={formik.values.confirmPassword}
            placeholder="رمز عبور خود را تکرار کنید"
            leftIconIcon={<EyeIcon size={20} />}
            rightIcon={<LockIcon size={20} />}
            errorMessage={
              formik.touched.confirmPassword && formik.errors.confirmPassword
                ? formik.errors.confirmPassword
                : ""
            }
          />
          <CustomBtn
            text={pending ? "درحال ارسال اطلاعات" : "ثبت نام"}
            className="bg-dark text-yellow w-full text-center cursor-pointer hover:shadow-lg transition-all"
            type="submit"
          />
        </div>
      </form>
      <div className="bottom flex items-center text-xs justify-center gap-1.5">
        <span className="text-gray">حساب کاربری دارید ؟</span>
        <Link href={"/auth/sign-in"}>
          <span className="cursor-pointer underline">وارد شوید</span>
        </Link>
      </div>
      <Link href={"/"}>
        <p className="text-center text-xs -mt-6">بازگشت به خانه</p>
      </Link>
    </div>
  );
};

export default SignUpForm;
