"use client";

import React, { useState } from "react";
import * as Form from "@radix-ui/react-form";

const DeleteAccountForm = ({ className = "" }) => {
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
          <Form.Label className="ml-2 text-sm font-medium">Yes, please erase my Oshofree account and all of my personal data permanently</Form.Label>
        </Form.Field>
        <Form.Submit asChild>
          <button
            disabled={!isChecked}
            className="mt-10 w-full max-w-lg rounded-full bg-red-600 py-2 font-medium uppercase text-white hover:bg-red-700 disabled:bg-gray-300"
          >
            Delete My Account
          </button>
        </Form.Submit>
      </Form.Root>
    </div>
  );
};

export default DeleteAccountForm;
