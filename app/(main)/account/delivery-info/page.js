import React from "react";
import DeliveryInfoForm from "@/components/AccountPage/DeliveryInfoForm";

const DeliveryInformation = () => {
  return (
    <>
      <h2 className="text-xl sm:text-2xl font-medium">Delivery Address</h2>
      <div className="my-6">
        <DeliveryInfoForm />
      </div>
    </>
  );
};

export default DeliveryInformation;
