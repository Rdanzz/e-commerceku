import { useState } from "react";
import Button from "../elements/Button";
import Input from "../elements/Input";
import Label from "../elements/Label";
import { loginSchema } from "../../schema/loginSchema"; 
import { ZodError } from "zod"; 

const FormLogin = () => {
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  ); 

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    setErrors({});

    try {
      loginSchema.parse({ email, password });

      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      window.location.href = "/products";
    } catch (error) {
      if (error instanceof ZodError) {
        const fieldErrors: { email?: string; password?: string } = {};

        error.errors.forEach((err) => {
          if (err.path[0] === "email") {
            fieldErrors.email = err.message;
          } else if (err.path[0] === "password") {
            fieldErrors.password = err.message;
          }
        });

        setErrors(fieldErrors); 
      }
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleLogin}>
      <div>
        <Label htmlFor="email">Email address</Label>
        <div className="mt-2">
          <Input id="email" name="email" type="email" />
        </div>
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <div>
        <div className="flex items-center justify-between">
          <Label htmlFor="password">Password</Label>
          <div className="text-sm">
            <a
              href="#"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Forgot password?
            </a>
          </div>
        </div>
        <div className="mt-2">
          <Input id="password" name="password" type="password" />
        </div>
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password}</p>
        )}
      </div>

      <div>
        <Button type="submit">Sign In</Button>
      </div>
    </form>
  );
};

export default FormLogin;
