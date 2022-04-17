import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useState } from "react";
// import Image from "next/image";

// const Collapse = dynamic(() => import("components/Collapse"), { ssr: false });
const Step = dynamic(() => import("components/@corp/Step"), { ssr: false });

// const MobileIcon = () => {
//   return (
//     <div className="bg-yellow-500 w-full h-full flex justify-center items-center">
//       <Image className="mobile-icon" width={20} height={38} src="/images/icons/mobile.svg" alt="mobile icon" />
//     </div>
//   );
// };

const Home: NextPage = () => {
  const [current, setCurrent] = useState(-1);
  const steps = [
    {
      title: "เลือกเดือน",
    },
    {
      title: "เลือกใบเสร็จ",
    },
    {
      title: "รัวิว",
    },
    {
      title: "เสร็จสิ้น",
    },
  ];
  return (
    <>
      <Step steps={steps} current={current} />
      <button onClick={() => setCurrent((prev) => (prev === steps.length ? 0 : prev + 1))}>{current}</button>
    </>
    // <div className="p-3">
    //   <div className="max-w-[1080px] mx-auto">
    //     <Collapse icon={<MobileIcon />} list={Array(20).fill({})} />
    //     <Collapse icon={<MobileIcon />} noCheckbox list={Array(8).fill({})} />
    //   </div>
    // </div>
  );
};

export default Home;
