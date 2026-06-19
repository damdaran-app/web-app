import { AuthContainer, AuthVideoCard, SignInForm } from "@/components";
import { getAuthReport } from "@/utils/services/api";

const SignInPage = async () => {
  const response = await getAuthReport("/getAuthReport");
  return (
    <div className="w-full h-[90vh]">
      <AuthContainer
        rightItemChilde={
          <>
            <SignInForm />
          </>
        }
        leftItemChilde={
          <>
            {response && (
              <AuthVideoCard
                videoSrc={response?.data.signIn.videoSrc}
                titleText={response?.data.signIn.title}
                descriptionText={response?.data.signIn.description}
              />
            )}
          </>
        }
        hideChildeName={"left"}
      />
    </div>
  );
};

export default SignInPage;
