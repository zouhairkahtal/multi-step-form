import { useLocation, useNavigate } from "react-router-dom";

function Summary() {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    isYearly,
    DateStep2,
    onlineServce,
    largerStorage,
    customizableProfile,
  } = location.state || {};

  const basePrice =
    DateStep2?.plan === "arcade"
      ? 90
      : DateStep2?.plan === "advanced"
      ? 120
      : 150;

  const onlinePrice = onlineServce ? (isYearly ? 10 : 1) : 0;
  const storagePrice = largerStorage ? (isYearly ? 20 : 2) : 0;
  const profilePrice = customizableProfile ? (isYearly ? 20 : 2) : 0;

  const total = basePrice + onlinePrice + storagePrice + profilePrice;

  const format = isYearly ? "/yr" : "/mo";

  return (
    <div className="w-full h-full ml-5 flex justify-center">
      <div className="p-5 rounded-lg w-full max-w-md">
        <div className="mb-5">
          <h1 className="text-3xl font-bold text-blue950">Finishing up</h1>
          <p className="text-Grey500">
            Double-check everything looks OK before confirming.
          </p>
        </div>

        <div className="bg-Blue50 p-5 rounded-lg">
          <div className="flex items-center justify-between border-b pb-5">
            <div>
              <h1 className="font-bold text-blue950 capitalize">
                {DateStep2?.plan} ({isYearly ? "Yearly" : "Monthly"})
              </h1>
              <button
                onClick={() => navigate("/select-plan")}
                className="text-Grey500 underline font-semibold"
              >
                Change
              </button>
            </div>
            <div>
              <h1 className="font-bold text-blue950">
                ${basePrice}
                {format}
              </h1>
            </div>
          </div>

          {onlineServce && (
            <div className="flex items-center justify-between my-3">
              <p className="text-Grey500">Online service</p>
              <p className="text-blue950">
                +${onlinePrice}
                {format}
              </p>
            </div>
          )}

          {largerStorage && (
            <div className="flex items-center justify-between my-3">
              <p className="text-Grey500">Larger storage</p>
              <p className="text-blue950">
                +${storagePrice}
                {format}
              </p>
            </div>
          )}

          {customizableProfile && (
            <div className="flex items-center justify-between my-3">
              <p className="text-Grey500">Customizable profile</p>
              <p className="text-blue950">
                +${profilePrice}
                {format}
              </p>
            </div>
          )}
        </div>

        <div className="w-full flex items-center justify-between mt-5 px-5">
          <h1 className="text-Grey500">
            Total {isYearly ? "(per year)" : "(per month)"}
          </h1>
          <span className="text-xl font-bold text-purple600">
            ${total}
            {format}
          </span>
        </div>

        <div className="w-full mt-16 flex justify-between">
          <button
            type="button"
            className="cursor-pointer font-semibold hover:text-blue950 text-Grey500 px-5 py-2 mt-10 rounded-xl hover:bg-blue800 transition"
            onClick={() => {
              navigate("/your-info");
            }}
          >
            Go Back
          </button>
          <button
            onClick={() => {
              navigate("/finishing-up");
            }}
            className="bg-purple600 font-semibold cursor-pointer text-white px-5 py-2 mt-10 rounded-lg hover:bg-blue800 transition"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default Summary;
