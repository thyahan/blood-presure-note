import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = (initialValue: boolean) => {
  const [enable, setEnable] = useLocalStorage("dark-theme", initialValue);
  const enableBool = enable === "true" || enable === true;

  console.log({ enable, enableBool });

  useEffect(() => {
    const className = "dark";
    const bodyClass = window.document.body.classList;

    enableBool ? bodyClass.add(className) : bodyClass.remove(className);
  }, [enableBool, setEnable]);

  console.log({ enable });

  return [enableBool, setEnable];
};

export default useDarkMode;
