interface TProps {
  title: string;
  description: string;
}

export const validation = (values: TProps) => {
  const errors: Partial<TProps> = {};

  if (!values.title.trim()) {
    errors.title = "عنوان اجباری است";
  } else if (values.title.length < 3) {
    errors.title = "حداقل ۳ کاراکتر";
  }

  if (!values.description.trim()) {
    errors.description = "توضیحات اجباری است";
  }

  return errors;
};
