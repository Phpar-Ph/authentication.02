import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useLoginUsers } from "../hook/useAuth";

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
    <div className=" h-screen w-full  flex items-center justify-center">
      <div className="bg-amber-700 rounded-2xl p-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col text-2xl p-4 font-bold "
        >
          <label htmlFor="email" className="flex flex-col my-4 text-amber-50">
            Email{" "}
            <input
              type="text"
              placeholder="Enter email.."
              name="email"
              {...register("email")}
              className="border-2 border-blue-400 bg-amber-50 text-gray-800"
            />
          </label>
          <label
            htmlFor="password"
            className="flex flex-col my-4 text-amber-50"
          >
            Password{" "}
            <input
              type="text"
              placeholder="Enter password..."
              name="password"
              {...register("password")}
              className="border-2 border-blue-400 bg-amber-50 text-gray-800"
            />
          </label>
          <button
            type="submit"
            className="bg-green-400 hover:cursor-pointer hover:scale-105 transition-all rounded-2xl px-2 py-4"
          >
            Sign in
          </button>
        </form>
        <h1
          className="text-amber-50 font-bold hover:cursor-pointer"
          onClick={() => navigate("/register")}
        >
          Click to Register
        </h1>
      </div>
    </div>
  );
}

export default SignIn;
