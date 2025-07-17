import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  Name: z.string().min(1, "Name is required"),
  email: z.string().email("Name is required"),
  phone: z.string().regex(/^\d{10}$/, "Name is required"),
});

type FormFields = z.infer<typeof formSchema>;

function YourInfo() {
  const {
    
    register,
    handleSubmit,
<<<<<<< HEAD
    formState: { errors}
=======
    formState: { errors},
>>>>>>> 9c839151d6f7e67f91a1dd5c956601ed224ccc31
  } = useForm<FormFields>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormFields) => {
    console.log(data);
    navigate("/select-plan")
  };

  const navigate = useNavigate();
  return (
    <div className="w-full h-full ml-5 flex justify-center">
      <div className="p-5 rounded-lg w-full max-w-md">
        <div className="mb-5">
          <h1 className="text-3xl font-bold text-blue950">Personal info</h1>
          <p className="text-Grey500">
            Please provide your name, email address, and phone number.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <label htmlFor="Name" className="block">
            <div className="flex justify-between">
              <span className="text-blue950">Name</span>
              {errors.Name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.Name.message}
                </p>
              )}
            </div>

            <input
              id="Name"
              type="text"
              {...register("Name")}
              className="w-full cursor-pointer h-14 rounded-md focus:border focus:border-purple600 text-blue950 text-xl font-semibold mt-1 border border-grey200 pl-5 hover:border-green600 focus:outline-none focus:border-green600"
            />
          </label>

          <label htmlFor="email" className="block">
            <div className="flex justify-between">
              <span className="text-blue950">Email Address</span>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <input
              id="email"
              type="email"
              {...register("email")}
              className="w-full h-14 cursor-pointer rounded-md focus:border focus:border-purple600 text-blue950 text-xl font-semibold mt-1 border border-grey200 pl-5 hover:border-green600 focus:outline-none focus:border-green600"
            />
          </label>

          <label htmlFor="phone" className="block">
            <div className="flex justify-between">
              <span className="text-blue950">Phone Number</span>
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>
            <input
              id="phone"
              type="tel"
              {...register("phone")}
              className="w-full h-14 cursor-pointer rounded-md focus:border focus:border-purple600 text-blue950 text-xl font-semibold mt-1 border border-grey200 pl-5 hover:border-green600 focus:outline-none focus:border-green600"
            />
          </label>

          <div className="w-full flex justify-end ">
            <button
              type="submit"
              
              className="bg-blue950 font-semibold cursor-pointer text-white px-5 py-2 mt-10 rounded-lg hover:bg-blue800 transition"
            >
              Next Step
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default YourInfo;
