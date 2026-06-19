import axios from "axios";
const baseUrl = process.env.NEXT_PUBLIC_API_URL;

const getToken = async () => {
  const isClient = typeof window !== "undefined" ? true : false;
  if (isClient) {
    const token = localStorage.getItem("mehrabProjectToken");
    return token;
  } else {
    const cookies = import("next/headers");
    const cookiesStore = (await cookies).cookies();
    const token = (await cookiesStore).get("mehrabProjectToken")?.value;
    return token;
  }
};

const http = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use(
  async (request) => {
    const token = await getToken();
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
  },
  async (error) => error,
);

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // if (error.status === 401) {
    //   if (typeof window !== "undefined") {
    //     toast.warning(
    //       "برای استفاده از امکانات بیشتر لطفا ابتدا وارد حساب کاربری خود شوید",
    //       { position: "top-center", className: `${samimBold.className}`, style:{textAlign: "right"}}
    //     );
    //   }
    // }
    return error;
  },
);

export default http;