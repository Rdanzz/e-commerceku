import FormRegister from "../components/fragments/FormRegister";
import AuthLayouts from "../components/layouts/AuthLayouts";

const RegisterPage = () => {
  return (
    <AuthLayouts type="register">
      <FormRegister />
    </AuthLayouts>
  );
};

export default RegisterPage;
