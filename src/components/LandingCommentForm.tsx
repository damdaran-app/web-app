"use client";
import { LandingCommentInputsData } from "@/utils/constant";
import { errorMessageHandler } from "@/utils/hook";
import { commentAboutUseAction } from "@/utils/server-actions";
import { TCommentAboutUseAction } from "@/utils/types/action-types";
import { useActionState, useEffect, useState } from "react";
import Container from "./Container";
import CustomBtn from "./CustomBtn";
import CustomInput from "./CustomInput";

const LandingCommentForm = () => {
  const [initialState] = useState<TCommentAboutUseAction>({
    status: 0,
    message: "",
  });
  const [state, action, pending] = useActionState(
    commentAboutUseAction,
    initialState,
  );

  useEffect(() => {
    if (state.message !== "") {
      errorMessageHandler({
        status: state.status,
        message: { successMessage: state.message, errorMessage: state.message },
      });
    }
  }, [state]);

  return (
    <Container>
      <form
        action={action}
        className="flex flex-col h-full justify-center items-center"
      >
        <h1 className="text-xl font-bold w-full text-right min-sm:mr-[98px] mt-6 max-sm:text-center">
          دیدگاه خود را درباره ی ما ارسال کنید
        </h1>
        {LandingCommentInputsData.map((item, index) => (
          <CustomInput
            key={index}
            className="w-4/5 mt-6"
            bgColor="bg-white"
            labelText={item.labelText}
            itemData={item.itemData}
            type={"text"}
            name={item.name}
            placeholder={item.placeholder}
          />
        ))}
        <CustomBtn
          pendingFlag={pending}
          text="همین حالا ارسال کنید"
          pendingText="درحال ارسال اطلاعات"
          className="bg-yellow text-dark w-4/5 rounded-3xl my-8 cursor-pointer"
        />
      </form>
    </Container>
  );
};

export default LandingCommentForm;
