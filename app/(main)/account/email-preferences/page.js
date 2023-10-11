import React from "react";
import EmailPreferenceForm from "@/components/UserAccountPage/EmailPreferenceForm";

const EmailPreferences = () => {
  return (
    <>
      <h2 className="text-xl font-medium sm:text-2xl">Email Preferences</h2>
      <div className="my-6">
        <EmailPreferenceForm />
      </div>
    </>
  );
};

export default EmailPreferences;
