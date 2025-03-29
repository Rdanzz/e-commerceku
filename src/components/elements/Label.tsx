import { LabelProps } from "../../types/type";

const Label = ({ children, htmlFor }: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm/6 font-medium text-gray-900"
    >
      {children}
    </label>
  );
};

export default Label;
