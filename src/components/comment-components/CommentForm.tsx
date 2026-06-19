"use client";
import { TComment } from "@/utils/types/comment-type";
import { useFormik } from "formik";
import { FC } from "react";
import CustomBtn from "../CustomBtn";
import { validation } from "./validaton";

// interface IProps {
//   labels: {
//     titleLabel: string;
//     descriptionLabel: string;
//   };
//   placeholder: {
//     titleInput: string;
//     descriptionInput: string;
//   };
//   initialValues?: {
//     title: string;
//     description: string;
//   };
//   submitAction?: (formData: FormData) => void;
// }

const CommentForm: FC<TComment> = ({
  labels,
  placeholder,
  initialValues,
  containerWidth,
  submitAction,
}) => {
  const { titleLabel, descriptionLabel } = labels;
  const { titleInput, descriptionInput } = placeholder;

  const formik = useFormik({
    // validationSchema: {}
    validate: validation,
    initialValues: {
      title: initialValues?.title ?? "",
      description: initialValues?.description ?? "",
    },
    onSubmit: (values) => {
      const formData = new FormData();
      formData.set("title", values.title);
      formData.set("description", values.description);
      submitAction?.(formData);
      setTimeout(() => {
        formik.handleReset("");
      }, 1000);
    },
  });

  return (
    <div
      className="form-control"
      style={{ width: `${containerWidth}%` }}
      data-aos="zoom-in"
    >
      <form onSubmit={formik.handleSubmit}>
        <div className="title-control w-full mt-6">
          {titleLabel && <h1>{titleLabel}</h1>}
          <input
            type="text"
            placeholder={titleInput}
            value={formik.values.title}
            onChange={formik.handleChange}
            name="title"
            className="w-full bg-white text-dark border border-border outline-0 rounded-2xl p-2.5 mt-3"
          />
          {formik.touched.title && formik.errors.title && (
            <span className="text-[14px] mr-3 text-red">
              {formik.errors.title}
            </span>
          )}
        </div>
        <div className="description-control mt-9">
          {descriptionLabel && <h1>{descriptionLabel}</h1>}
          <textarea
            placeholder={descriptionInput}
            name="description"
            id=""
            value={formik.values.description}
            onChange={formik.handleChange}
            className="w-full h-40 resize-none bg-white text-dark border border-border outline-0 rounded-2xl p-2.5 mt-3"
          ></textarea>
          {formik.touched.description && formik.errors.description && (
            <span className="text-[14px] mr-3 text-red">
              {formik.errors.description}
            </span>
          )}
        </div>
        <div className="btn-control flex gap-2.5 mt-5 mr-1.5">
          <CustomBtn
            text="ثبت"
            className="bg-dark text-[14px] cursor-pointer w-[100px] text-white"
            type="submit"
          />
          <CustomBtn
            text="لفو"
            className="bg-red text-[14px] cursor-pointer w-[100px] text-white"
            type="reset"
            onClick={formik.handleReset}
          />
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
