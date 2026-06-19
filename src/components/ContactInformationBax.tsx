import { LocationIcon, PhoneIcon, TelIcon } from "@/assets/icons";
import { getMyInformation } from "@/utils/services/api";
import Container from "./Container";

const ContactInformationBax = async () => {
  const response = await getMyInformation("/getSellerInformation");
  return (
    <Container>
      <h1 className="title-text text-xl font-bold">اطلاعات تماس</h1>
      <div className="items-control flex flex-col text-dark gap-y-3 mt-3.5 max-xl:items-center">
        <div className="tel-item flex items-center gap-x-1.5">
          <TelIcon size={28} />
          <span>09112800689</span>
        </div>
        <div className="phone-item flex items-center gap-x-1.5">
          <PhoneIcon size={28} />
          <div className="phoneNumber-control flex gap-x-3">
            {/* {response.data.phoneNumber.map((item, index) => (
              <span key={index}>{item}</span>
            ))} */}
            <span>09112800689</span>
          </div>
        </div>
        <div className="address-item flex items-center gap-x-1.5">
          <LocationIcon size={28} />
          <span>{response.data.address}</span>
        </div>
      </div>
    </Container>
  );
};

export default ContactInformationBax;
