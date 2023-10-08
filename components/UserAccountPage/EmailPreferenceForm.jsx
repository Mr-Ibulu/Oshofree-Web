"use client";

import React from "react";
import * as Form from "@radix-ui/react-form";
import { MdKeyboardArrowDown, MdOutlineError } from "react-icons/md";

const EmailPreferenceForm = () => {
  return (
    <div>
      <Form.Root>
        <div className="mb-10">
          <div className="text-lg font-medium">Deals Near You</div>
          <p className="text-sm mt-2 mb-5">
            Let us know what city you wish to receive deals for. You may only choose one location, but this can be changed at any time.
          </p>
          <Form.Field className="grid mb-2" name="city">
            <div className="flex flex-col">
              <Form.Message className="text-xs font-medium text-red-500 flex items-center gap-1" match="valueMissing">
                <MdOutlineError className="text-sm" /> Please choose your City
              </Form.Message>
            </div>
            <div className="relative">
              <Form.Control asChild>
                <select
                  className="data-[invalid]:border-red-500 border-2 border-gray-300 placeholder:text-xs w-full h-11 font-medium px-5 appearance-none rounded-full focus:ring-0 focus:border-sky-500 focus:outline-none"
                  type="text"
                  defaultValue=""
                  required
                >
                  <option disabled={true} value="">
                    Choose City
                  </option>
                  <option value="lagos">Lagos</option>
                  <option value="port-harcourt">Port Harcourt</option>
                </select>
              </Form.Control>
              <span className="absolute top-1/2 -translate-y-1/2 right-3 text-2xl">
                <MdKeyboardArrowDown />
              </span>
            </div>
          </Form.Field>
        </div>
        <div className="mb-10">
          <div className="text-lg font-medium">Marketing Emails</div>
          <p className="text-sm mt-2 mb-5">Opt in to our emails to receive a consolidated email containing the best deals relevant to you</p>
          <Form.Field className="inline-flex items-center">
            <Form.Control asChild>
              <input type="checkbox" defaultChecked />
            </Form.Control>
            <Form.Label className="text-sm font-semibold leading-8 ml-2">Opt in to emails</Form.Label>
          </Form.Field>
        </div>
        <div className="mb-10">
          <div className="text-lg font-medium">Email Surveys</div>
          <p className="text-sm mt-2 mb-5">
            By opting in to Email Surveys, you will receive occasional emails about how we’re meeting your needs as a customer and how we can improve.
          </p>
          <Form.Field className="inline-flex items-center">
            <Form.Control asChild>
              <input type="checkbox" defaultChecked />
            </Form.Control>
            <Form.Label className="text-sm font-semibold leading-8 ml-2">Opt in to surveys</Form.Label>
          </Form.Field>
        </div>
        <Form.Submit asChild>
          <button className="bg-sky-600 hover:bg-sky-700 text-white w-full py-2 rounded-full mt-7 font-medium">Save Changes</button>
        </Form.Submit>
      </Form.Root>
    </div>
  );
};

export default EmailPreferenceForm;
