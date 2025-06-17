import thank from "../assets/images/icon-thank-you.svg";

function FinishingUp() {
  return (
    <>
      <div className="flex flex-col items-center justify-center  w-full h-full">
        <img src={thank} alt="thank" className="mb-8" />
        <h1 className="text-3xl font-bold text-blue950 mb-5">Thank you!</h1>
        <p className="text-Grey500 w-9/12 text-center">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremagaming.com.
        </p>
      </div>
    </>
  );
}

export default FinishingUp;
