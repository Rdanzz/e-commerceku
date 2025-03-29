import { ReactNode } from "react";

const AuthLayouts = ({
  children,
  type,
}: {
  children: ReactNode;
  type: string;
}) => {
  const linkText = type === "login" ? "Register" : "Login";
  const linkPath = type === "login" ? "/register" : "/login";
  const promptText =
    type === "login" ? "Don't have an account?" : "Already have an account?";

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Welcome, Please enter your details
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        {children}

        <div className="mt-10 flex justify-center text-sm/6 text-gray-500">
          <span>{promptText}</span>
          <a
            href={linkPath}
            className="ml-1 font-semibold text-indigo-600 hover:text-indigo-500"
          >
            {linkText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default AuthLayouts;
