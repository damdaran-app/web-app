import { getLandingReport } from "@/utils/services/api";
import Header from "./Header";

const HeaderWrapper = async () => {
  const response = await getLandingReport("/getLandingReport");
  return <Header data={response} />;
};

export default HeaderWrapper;
