import React, { useState } from "react";
import Layout from "components/@corp/Layout";
import Section from "components/@corp/Section";
import Wizard from "components/@corp/Wizard";
import Alert from "components/@corp/Alert";
import Select from "components/@corp/Select";

interface Props {}

const Payment = (props: Props) => {
  const [current, setCurrent] = useState(0);

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const items = [
    {
      title: "เลือกเดือน",
      id: "select month",
      render: () => {
        return (
          <Section>
            <Alert
              type="warning"
              message="กรณีดาวน์โหลดใบเสร็จ/ใบกำกับภาษีอิเล็กทรอนิกส์ โปรดใช้หมายเลข 8 ตัวท้ายของเลขที่บัญชี/รหัสลูกค้า สำหรับเรียกดูหรือจัดพิมพ์เอกสาร"
            />
            <Select options={options} />
          </Section>
        );
      },
    },
    {
      title: "เลือกใบเสร็จ",
      id: "select invoice",
      render: () => {
        return (
          <Section>
            <Alert
              type="warning"
              message="กรณีดาวน์โหลดใบเสร็จ/ใบกำกับภาษีอิเล็กทรอนิกส์ โปรดใช้หมายเลข 8 ตัวท้ายของเลขที่บัญชี/รหัสลูกค้า สำหรับเรียกดูหรือจัดพิมพ์เอกสาร"
            />
          </Section>
        );
      },
    },
    {
      title: "เสร็จสิ้น",
      id: "done",
      render: () => {
        return (
          <Section>
            <Alert
              type="warning"
              message="กรณีดาวน์โหลดใบเสร็จ/ใบกำกับภาษีอิเล็กทรอนิกส์ โปรดใช้หมายเลข 8 ตัวท้ายของเลขที่บัญชี/รหัสลูกค้า สำหรับเรียกดูหรือจัดพิมพ์เอกสาร"
            />
          </Section>
        );
      },
    },
  ];

  return (
    <Layout>
      <Wizard items={items} current={current} />
    </Layout>
  );
};

export default Payment;
