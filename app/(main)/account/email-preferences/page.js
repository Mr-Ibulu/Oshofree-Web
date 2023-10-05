import React from "react";
import EmailPreferenceForm from "@/components/AccountPage/EmailPreferenceForm";

const EmailPreferences = () => {
  return (
    <>
      <h2 className="text-xl sm:text-2xl font-medium">Email Preferences</h2>
      <div className="my-6">
        <EmailPreferenceForm />
      </div>
    </>
  );
};

export default EmailPreferences;
