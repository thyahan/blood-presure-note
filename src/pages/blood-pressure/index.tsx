import BllodPressureForm, { FormState } from "components/BloodPressureForm";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useState } from "react";

const Layout = dynamic(() => import("components/Layout"), { ssr: false });

const Home: NextPage = () => {
  const [form, setForm] = useState<FormState>({
    systolic: "",
    diastolic: "",
    pulse: "",
  });

  const onSubmit = (formState: FormState) => {
    setForm(formState);
  };

  console.log(form);

  return (
    <Layout title="Blood Pressure">
      <BllodPressureForm onSubmit={onSubmit} />
      {Object.keys(form).map((key: string) => (
        <li key={key}>{form[key as keyof FormState]}</li>
      ))}
    </Layout>
  );
};

export default Home;
