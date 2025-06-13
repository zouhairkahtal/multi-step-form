import arcadeIcon from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";
import { useState } from "react";
import { useForm } from "react-hook-form";

type FormFields = {
  plan: "arcade" | "advanced" | "pro";
};

function SelectPlan() {
  const [isYearly, setIsYearly] = useState(false);
  const { register, handleSubmit, watch } = useForm<FormFields>();
  const selectedPlan = watch("plan");

  const onSubmit = (data: FormFields) => {
    console.log({
      ...data,
      billing: isYearly ? "yearly" : "monthly",
    });
    console.log(data)
  };

  const plans = [
    {
      id: "arcade",
      name: "Arcade",
      price: 9,
      icon: arcadeIcon,
    },
    {
      id: "advanced",
      name: "Advanced",
      price: 12,
      icon: advanced,
    },
    {
      id: "pro",
      name: "Pro",
      price: 15,
      icon: pro,
    },
  ];

  return (
      <div className="w-full h-full ml-5 flex justify-center">
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="p-5 rounded-lg w-full max-w-md">
        <div className="mb-5">
            <h1 className="text-3xl font-bold text-blue950">
              Select your plan
            </h1>
            <p className="text-Grey500">
              You have the option of monthly or yearly billing.
            </p>
          </div>

          <div className="w-full h-[85%]">
            <div className="flex gap-3 mb-8">
              {plans.map((plan) => (
                <label
                  key={plan.id}
                  className={`p-5 border w-32 rounded-xl cursor-pointer ${
                    selectedPlan === plan.id
                      ? "border-blue950 bg-blue100"
                      : "border-Grey500"
                  }`}
                >
                  <input
                    type="radio"
                    value={plan.id}
                    {...register("plan", { required: true })}
                    className="hidden"
                  />
                  <img className="mb-10" src={plan.icon} alt="icon" />
                  <div>
                    <h1 className="font-semibold text-blue950">{plan.name}</h1>
                    <span className="text-sm text-Grey500">${isYearly? plan.price*10+'/yr':plan.price+'/mo'}</span>
                  </div>
                </label>
              ))}
            </div>

            <div className="bg-Blue100 w-full h-14 flex items-center justify-center rounded-lg">
              <div className="flex items-center justify-center gap-6 w-full py-3 rounded-xl">
                <span
                  className={`font-semibold text-sm ${
                    !isYearly ? "text-blue950" : "text-Grey500"
                  }`}
                >
                  Monthly
                </span>

                <label className="relative inline-block w-12 h-6 cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={isYearly}
                    onChange={() => setIsYearly((prev) => !prev)}
                  />
                  <div className="w-full h-full bg-blue950 rounded-full peer-checked:bg-blue950 transition-colors"></div>
                  <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-all peer-checked:translate-x-6"></div>
                </label>

                <span
                  className={`font-semibold text-sm ${
                    isYearly ? "text-blue950" : "text-Grey500"
                  }`}
                >
                  Yearly
                </span>
              </div>
            </div>

            <div className="w-full mt-16 flex justify-between">
              <button
                type="button"
                className="cursor-pointer font-semibold hover:text-blue950 text-Grey500 px-5 py-2 mt-10 rounded-xl hover:bg-blue800 transition"
              >
                Go Back
              </button>
              <button
                type="submit"
                className="bg-blue950 font-semibold cursor-pointer text-white px-5 py-2 mt-10 rounded-lg hover:bg-blue800 transition"
              >
                Next Step
              </button>
            </div>
          </div>
        </div>
    </form>
      </div>
  );
}

export default SelectPlan;
