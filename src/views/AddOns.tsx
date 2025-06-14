import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  onlineServce: z.boolean().optional(),
  largerStorage: z.boolean().optional(),
  customizableProfile: z.boolean().optional(),
});

type FormData = z.infer<typeof formSchema>;

function AddOns() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      onlineServce: false,
      largerStorage: false,
      customizableProfile: false,
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Form data:", data);
    navigate("/summary");
  };

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
            <div className="gap-3 mb-8 space-y-4">
              <label htmlFor="onlineServce" className="flex justify-between items-start p-4 border rounded-lg">
                <div className="flex items-start space-x-3">
                  <input type="checkbox" id="onlineServce" {...register("onlineServce")} />
                  <div>
                    <span className="font-medium">Online service</span>
                    <p className="text-sm text-gray-500">Access to multiplayer games</p>
                  </div>
                </div>
                <span className="text-blue-600 font-semibold">+$1/mo</span>
              </label>

              <label htmlFor="largerStorage" className="flex justify-between items-start p-4 border rounded-lg">
                <div className="flex items-start space-x-3">
                  <input type="checkbox" id="largerStorage" {...register("largerStorage")} />
                  <div>
                    <span className="font-medium">Larger storage</span>
                    <p className="text-sm text-gray-500">Extra 1TB of cloud save</p>
                  </div>
                </div>
                <span className="text-blue-600 font-semibold">+$2/mo</span>
              </label>

              <label htmlFor="customizableProfile" className="flex justify-between items-start p-4 border rounded-lg">
                <div className="flex items-start space-x-3">
                  <input type="checkbox" id="customizableProfile" {...register("customizableProfile")} />
                  <div>
                    <span className="font-medium">Customizable profile</span>
                    <p className="text-sm text-gray-500">Custom theme on your profile</p>
                  </div>
                </div>
                <span className="text-blue-600 font-semibold">+$2/mo</span>
              </label>
            </div>

            <div className="w-full mt-16 flex justify-between">
              <button
                type="button"
                className="cursor-pointer font-semibold hover:text-blue950 text-Grey500 px-5 py-2 mt-10 rounded-xl hover:bg-blue800 transition"
                onClick={() => navigate("/select-plan")}
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

export default AddOns;
