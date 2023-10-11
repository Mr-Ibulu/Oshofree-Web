import React from "react";
import DeliveryInfoForm from "@/components/UserAccountPage/DeliveryInfoForm";

const DeliveryInformation = () => {
  return (
    <>
      <h2 className="text-xl font-medium sm:text-2xl">Delivery Address</h2>
      <div className="my-6">
        <DeliveryInfoForm />
      </div>
    </>
  );
};

export default DeliveryInformation;
