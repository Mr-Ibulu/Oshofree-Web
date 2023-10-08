import React from "react";
import AccountInfoForm from "@/components/UserAccountPage/AccountInfoForm";

const AccountInfomation = () => {
  return (
    <>
      <h2 className="text-xl sm:text-2xl font-medium">Account Infomation</h2>
      <div className="my-6">
        <AccountInfoForm />
      </div>
    </>
  );
};

export default AccountInfomation;
