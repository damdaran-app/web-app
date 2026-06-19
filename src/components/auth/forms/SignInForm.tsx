"use client";
import { EyeIcon, LockIcon, UserIcon } from "@/assets/icons";
import CustomBtn from "@/components/CustomBtn";
import { samimBold } from "@/components/fonts";
import { signInAction } from "@/utils/server-actions/auth/signInAction";
import { TSignInResponse } from "@/utils/types/api-responses-types";
import { signInValidationSchema } from "@/utils/validations/authForm-validation";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { startTransition, useActionState, useEffect, useState } from "react";
import { toast } from "sonner";
import FormInput from "./FormInput";

const SignInForm = () => {
  const [formInitialState] = useState<TSignInResponse>({
    message: "",
    token: "",
  });
  const [state, action, pending] = useActionState(
    signInAction,
    formInitialState,
  );
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      emailOrPhoneNumber: "",
      password: "",
    },
    validationSchema: signInValidationSchema,
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append("emailOrPhoneNumber", values.emailOrPhoneNumber);
      formData.append("password", values.password);
      startTransition(() => action(formData));
    },
  });

  useEffect(() => {
    if (state.message == "successfully") {
      toast.success("ورود شما باموفقیت انجام شد", {
        position: "top-center",
        className: `${samimBold.className}`,
        // style: { textAlign: "right" },
      });
      localStorage.setItem("mehrabProjectToken", state.token);
      router.push("/");
    } else if (state.message == "error") {
      toast.error("کاربر یافت نشد", {
        position: "top-center",
        className: `${samimBold.className}`,
        // style: { textAlign: "center" },
      });
    }
  }, [state, router]);

  return (
    <div className="w-full flex flex-col gap-y-9 ">
      <div className="title-control">
        <h1 className={`${samimBold.className} text-center text-xl`}>
          ورود به حساب کاربری
        </h1>
        <p className="text-center text-xs mt-4">
          برای دسترسی به پنل کاربری و مدیریت اطلاعات خود، وارد حساب‌تان شوید.
        </p>
      </div>
      <form action="" onSubmit={formik.handleSubmit}>
        <div className="input-control flex flex-col gap-y-8">
          <FormInput
            type="text"
            name="emailOrPhoneNumber"
            changeType={false}
            onChange={formik.handleChange}
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
            placeholder="رمز عبور خود را وارد کنید"
            leftIconIcon={<EyeIcon size={20} />}
            rightIcon={<LockIcon size={20} />}
            errorMessage={
              formik.touched.password && formik.errors.password
                ? formik.errors.password
                : ""
            }
          />
          <CustomBtn
            text={pending ? "درحال ارسال اطلاعات" : "وارد شوید"}
            className="bg-dark text-yellow w-full text-center cursor-pointer hover:shadow-lg transition-all"
            type="submit"
          />
        </div>
      </form>
      <div className="bottom flex items-center text-xs justify-center gap-1.5">
        <span className="text-gray">حساب کاربری ندارید ؟</span>
        <Link href={"/auth/sign-up"}>
          <span className="cursor-pointerm underline">
            همین حالا ایجاد کنید
          </span>
        </Link>
      </div>
      <Link href={"/"}>
        <p className="text-center text-xs -mt-6">بازگشت به خانه</p>
      </Link>
    </div>
  );
};

export default SignInForm;
