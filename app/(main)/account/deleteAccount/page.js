import DeleteAccountForm from "@/components/AccountPage/DeleteAccountForm";
import React from "react";

const DeleteAccount = () => {
  return (
    <>
      <h2 className="text-xl sm:text-2xl font-medium text-center">Delete Account</h2>
      <div className="my-6 text-center">
        <h3 className="font-medium text-red-700">Please read carefully</h3>
        <p className="max-w-lg mx-auto text-left mt-4">
          You are about to request that we permanently delete your data and close your Oshofree account. All goods and services that you have access
          to through your account will stop being offered as soon as it is deleted.
        </p>
        <DeleteAccountForm className="mt-10 max-w-xl mx-auto" />
      </div>
    </>
  );
};

export default DeleteAccount;
