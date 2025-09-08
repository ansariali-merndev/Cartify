import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

export const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4 text-center">
      <h1 className="text-9xl font-extrabold text-red-500 mb-4 sm:text-7xl">
        404
      </h1>
      <h2 className="text-3xl sm:text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6 sm:text-sm">
        The page you are looking for might have been removed or is temporarily
        unavailable.
      </p>
      <Button
        onClick={() => navigate("/")}
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition-all"
      >
        Go Back Home
      </Button>
    </div>
  );
};
