import React, { useState } from "react";
import css from "./index.module.css";
import dynamic from "next/dynamic";

const Button = dynamic(() => import("components/Button"), { ssr: false });
const Input = dynamic(() => import("components/Input"), { ssr: false });

export interface FormState {
  systolic: string;
  diastolic: string;
  pulse: string;
}

interface Props {
  onSubmit: (formState: FormState) => void;
}

const formFlow = ["systolic", "diastolic", "pulse"];

const BllodPressureForm = (props: Props) => {
  const [state, setState] = useState<FormState>({
    systolic: "",
    diastolic: "",
    pulse: "",
  });

  const onInputKeyUp = (index: number) => (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (index < 2) {
        document.getElementById(formFlow[index + 1])?.focus();
      }

      return;
    }
  };

  const onInputChange = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    return setState((prev) => ({
      ...prev,
      [key]: e.target.value,
    }));
  };

  const onSubmit = () => {
    props.onSubmit(state);
  };

  return (
    <div className={css["blood-pressure-form"]}>
      <Input
        type="tel"
        id="systolic"
        required
        label="Systolic"
        placeholder="systolic (mmHg)"
        onKeyUp={onInputKeyUp(0)}
        onChange={onInputChange("systolic")}
      />
      <Input
        type="tel"
        id="diastolic"
        required
        label="Diastolic"
        placeholder="diastolic (mmHg)"
        onKeyUp={onInputKeyUp(1)}
        onChange={onInputChange("diastolic")}
      />
      <Input type="tel" id="pulse" required label="Pulse" placeholder="pulse / min" onKeyUp={onInputKeyUp(2)} onChange={onInputChange("pulse")} />
      <div>
        <Button id="save" type="success" onClick={onSubmit}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default BllodPressureForm;
