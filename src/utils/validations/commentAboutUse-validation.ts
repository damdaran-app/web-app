import z from "zod";

export const commentAboutUseValidationSchema = z.object({
  name: z.string().min(1, "لطفا نام را به درستی وارد کنید"),
  email: z.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "ایمیل معتبر نیست"),
  message: z.string().min(1, "لطفا متن دیدگاه را به درستی وارد کنید"),
});
