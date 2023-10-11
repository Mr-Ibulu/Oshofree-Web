"use client";

import React, { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import SignInForm from "./SignInForm";

export function SignInModal() {
  const router = useRouter();
  const [open, setOpen] = useState(true);

  const changeOpenState = () => {
    if (open) {
      router.back();
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} modal={true} onOpenChange={changeOpenState}>
      <DialogContent className="w-[95%] rounded-lg focus:outline-none sm:max-w-xl sm:px-10" onOpenAutoFocus={(e) => e.preventDefault()}>
        <DialogHeader className="space-y-3">
          <DialogTitle className="text-3xl leading-none">Login</DialogTitle>
          <DialogDescription>Welcome Back, Login to your account</DialogDescription>
        </DialogHeader>
        <SignInForm />
      </DialogContent>
    </Dialog>
  );
}

export default SignInModal;
