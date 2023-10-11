import React from "react";
import { Badge } from "../ui/badge";
import { MdOutlineCheck, MdOutlineClose } from "react-icons/md";

const OrderStatusBadge = ({ variant, message }) => {
  return (
    <>
      {variant === "pending" && (
        <Badge className={"space-x-2 bg-sky-600"}>
          <span>{message}</span>
          <span className="block h-5 w-5 animate-spin rounded-full border-4 border-gray-300 border-t-white" />
        </Badge>
      )}
      {variant === "complete" && (
        <Badge className={"space-x-2 bg-green-600"}>
          <span>{message}</span>
          <MdOutlineCheck className="text-lg" />
        </Badge>
      )}
      {variant === "cancelled" && (
        <Badge className={"space-x-2 bg-red-600"}>
          <span>{message}</span>
          <MdOutlineClose className="text-lg" />
        </Badge>
      )}
    </>
  );
};

export default OrderStatusBadge;
