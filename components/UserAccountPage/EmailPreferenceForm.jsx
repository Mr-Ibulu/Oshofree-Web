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
          <p className="mb-5 mt-2 text-sm">
            Let us know what city you wish to receive deals for. You may only choose one location, but this can be changed at any time.
          </p>
          <Form.Field className="mb-2 grid" name="city">
            <div className="flex flex-col">
              <Form.Message className="flex items-center gap-1 text-xs font-medium text-red-500" match="valueMissing">
                <MdOutlineError className="text-sm" /> Please choose your City
              </Form.Message>
            </div>
            <div className="relative">
              <Form.Control asChild>
                <select
                  className="h-11 w-full appearance-none rounded-full border-2 border-gray-300 px-5 font-medium placeholder:text-xs data-[invalid]:border-red-500 focus:border-sky-500 focus:outline-none focus:ring-0"
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
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-2xl">
                <MdKeyboardArrowDown />
              </span>
            </div>
          </Form.Field>
        </div>
        <div className="mb-10">
          <div className="text-lg font-medium">Marketing Emails</div>
          <p className="mb-5 mt-2 text-sm">Opt in to our emails to receive a consolidated email containing the best deals relevant to you</p>
          <Form.Field className="inline-flex items-center">
            <Form.Control asChild>
              <input type="checkbox" defaultChecked />
            </Form.Control>
            <Form.Label className="ml-2 text-sm font-semibold leading-8">Opt in to emails</Form.Label>
          </Form.Field>
        </div>
        <div className="mb-10">
          <div className="text-lg font-medium">Email Surveys</div>
          <p className="mb-5 mt-2 text-sm">
            By opting in to Email Surveys, you will receive occasional emails about how we’re meeting your needs as a customer and how we can improve.
          </p>
          <Form.Field className="inline-flex items-center">
            <Form.Control asChild>
              <input type="checkbox" defaultChecked />
            </Form.Control>
            <Form.Label className="ml-2 text-sm font-semibold leading-8">Opt in to surveys</Form.Label>
          </Form.Field>
        </div>
        <Form.Submit asChild>
          <button className="mt-7 w-full rounded-full bg-sky-600 py-2 font-medium text-white hover:bg-sky-700">Save Changes</button>
        </Form.Submit>
      </Form.Root>
    </div>
  );
};

export default EmailPreferenceForm;
