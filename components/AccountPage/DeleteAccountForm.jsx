"use client";

import React, { useState } from "react";
import * as Form from "@radix-ui/react-form";

const DeleteAccountForm = ({ className }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked((current) => !current);
  };

  return (
    <div className={className}>
      <Form.Root>
        <Form.Field className="inline-flex items-center">
          <Form.Control asChild>
            <input type="checkbox" value={isChecked} onChange={handleCheck} className="min-w-[20px]" />
          </Form.Control>
          <Form.Label className="text-sm font-medium ml-2">Yes, please erase my Oshofree account and all of my personal data permanently</Form.Label>
        </Form.Field>
        <Form.Submit asChild>
          <button
            disabled={!isChecked}
            className="disabled:bg-gray-300 bg-red-600 hover:bg-red-700 text-white w-full max-w-lg py-2 rounded-full mt-10 font-medium uppercase"
          >
            Delete My Account
          </button>
        </Form.Submit>
      </Form.Root>
    </div>
  );
};

export default DeleteAccountForm;
