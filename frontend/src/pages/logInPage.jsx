import Input from "../components/Input";
import { getImageLink } from "../utils/get-image-link";

const LogInPage = () => {
  return (
    <div
      id="login-page"
      className="w-full min-h-screen flex items-center justify-center bg-gray-100"
    >
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <div className="flex justify-center">
          <h1 className="text-2xl font-bold text-red-600 underline-offset-2 uppercase border-1 p-2 px-8">
            Students Management
          </h1>
        </div>
        <form className="space-y-4">
          <Input
            type="email"
            id="email"
            className=""
            placeholder="Enter your email"
            label="Email"
          />
          <Input
            type="password"
            id="password"
            className=""
            placeholder="Enter your password"
            label="Password"
          />
          <div className="flex items-center justify-between">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input id="remember-me" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"/>
              </div>
              <div className="ml-2 text-sm">
                <label htmlFor="remember-me" className="text-gray-700">Remember me</label>
              </div>
            </div>
            <div className="text-sm"> 
              <a href="#" className="font-medium text-blue-600 hover:underline"> Forgot your password? </a>
            </div>
          </div>
          <div>
            <button type="submit"
              className="w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
              Go Ahead
            </button>
          </div>
        </form>
        <p className="text-sm text-center text-gray-600">
          Don't have an account?{" "} <a href="#" className="font-medium text-blue-600 hover:underline"> Sign Up </a>
        </p>
      </div>
    </div>
  );
};

export default LogInPage;
