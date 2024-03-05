import { Suspense } from "react";
import DynamicForm from "./components/form";

const FormPage = () => {
  return (
    <Suspense>
      <DynamicForm />
    </Suspense>
  );
};

export default FormPage;
