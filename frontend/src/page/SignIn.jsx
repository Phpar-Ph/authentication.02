import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useLoginUsers } from "../hook/useUserAuth";

function SignIn() {
  const navigate = useNavigate();
  const { mutate } = useLoginUsers();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-200 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-800 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h1 className="text-3xl font-bold text-amber-800 mb-8 text-center">
                  Sign In
                </h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="relative">
                    <input
                      type="email"
                      {...register("email")}
                      className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-amber-600"
                      placeholder="Email address"
                    />
                    <label className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                      Email address
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="password"
                      {...register("password")}
                      className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-amber-600"
                      placeholder="Password"
                    />
                    <label className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                      Password
                    </label>
                  </div>
                  <div className="relative">
                    <button
                      type="submit"
                      className="bg-amber-600 text-white rounded-md px-6 py-2 w-full hover:bg-amber-700 transition-colors duration-300 mt-8"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
                <div className="text-center mt-6">
                  <p className="text-sm text-gray-600">
                    Don't have an account?{" "}
                    <span
                      onClick={() => navigate("/register")}
                      className="text-amber-600 hover:text-amber-800 cursor-pointer font-semibold"
                    >
                      Register here
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
