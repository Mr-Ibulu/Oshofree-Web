import DeleteAccountForm from "@/components/UserAccountPage/DeleteAccountForm";
import React from "react";

const DeleteAccount = () => {
  return (
    <>
      <h2 className="text-center text-xl font-medium sm:text-2xl">Delete Account</h2>
      <div className="my-6 text-center">
        <h3 className="font-medium text-red-700">Please read carefully</h3>
        <p className="mx-auto mt-4 max-w-lg text-left">
          You are about to request that we permanently delete your data and close your Oshofree account. All goods and services that you have access
          to through your account will stop being offered as soon as it is deleted.
        </p>
        <DeleteAccountForm className="mx-auto mt-10 max-w-xl" />
      </div>
    </>
  );
};

export default DeleteAccount;
