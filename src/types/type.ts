export interface InputProps {
  id: string;
  name: string;
  type: string;
}

export interface LabelProps {
  children: React.ReactNode;
  htmlFor: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
}
