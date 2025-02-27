import { useForm } from "react-hook-form"
import toast from "react-hot-toast";
import SummaryApi from "../common/SummaryApi";
import axios from "axios";
import { baseURL } from "../common/SummaryApi";


const Register = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await axios({
        method: SummaryApi.register.method,
        url: `${baseURL}${SummaryApi.register.url}`,
        data,
        withCredentials: true, // Ensures cookies are sent
      });

      console.log("Registration successful:", response.data);
      toast.success(response?.data?.message || "Registration successful!");
    } catch (error) {
      console.error("Registration failed:", error);
      toast.error(error?.response?.data?.message || "Registration failed. Please try again.");
    }
  };



  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-5">Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("name", { required: true })}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("email", { required: true })}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("password", { required: true })}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
