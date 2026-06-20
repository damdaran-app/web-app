import { getLandingReport } from "@/utils/services/api";
import Header from "./Header";

const HeaderWrapper = async () => {
  const response = await getLandingReport("/getLandingReport");
  if (response.success && response.data) {
    return <Header data={response.data} />;
  } else {
    return <></>;
  }
};

export default HeaderWrapper;
