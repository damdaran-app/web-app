import { AuthContainer, AuthVideoCard, SignUpForm } from "@/components";
import { getAuthReport } from "@/utils/services/api";
// import video from "../../../assets/video/IMG_5843.MP4"

const SignUpPage = async () => {
  const response = await getAuthReport("/getAuthReport");
  return (
    <div className="w-full h-[90vh]">
      <AuthContainer
        rightItemChilde={
          <>
            {response && (
              <AuthVideoCard
                videoSrc={response?.data.signUp.videoSrc}
                titleText={response?.data.signUp.title}
                descriptionText={response?.data.signUp.description}
              />
            )}
          </>
        }
        leftItemChilde={
          <>
            <SignUpForm />
          </>
        }
        hideChildeName={"right"}
      />
    </div>
  );
};

export default SignUpPage;
