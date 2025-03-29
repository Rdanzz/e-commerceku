import Button from "../elements/Button";
import Input from "../elements/Input";
import Label from "../elements/Label";

const FormRegister = () => {
  return (
    <form action="#" method="POST" className="space-y-6">
      <div>
        <Label htmlFor="username">Username</Label>
        <div className="mt-2">
          <Input id="username" name="username" type="text" />
        </div>
      </div>

      <div>
        <Label htmlFor="email">Email address</Label>
        <div className="mt-2">
          <Input id="email" name="email" type="email" />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <Label htmlFor="password">Password</Label>
        </div>
        <div className="mt-2">
          <Input id="password" name="password" type="password" />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <Label htmlFor="passwordConfirmation">Password Confirmation</Label>
        </div>
        <div className="mt-2">
          <Input id="passwordConfirmation" name="passwordConfirmation" type="password" />
        </div>
      </div>

      <div>
        <Button type="submit">Register</Button>
      </div>
    </form>
  );
};

export default FormRegister;
