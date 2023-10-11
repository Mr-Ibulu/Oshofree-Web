import React from "react";
import ImageWithPlaceholder from "@/components/ImageWithPlaceholder";
import Link from "next/link";
import OrderStatusBadge from "@/components/UserAccountPage/OrderStatusBadge";

const OrderPreview = ({ order, orderDetailsLink }) => {
  return (
    <div className="rounded-md border-b border-gray-300 px-2 py-4">
      <div className="flex flex-col flex-wrap gap-x-2 gap-y-4 xl:flex-row">
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
          <div className="relative w-44 overflow-hidden rounded-md">
            <ImageWithPlaceholder src={order.deal.image} sizes={"70vw"} />
          </div>
          <div className="flex max-w-xs flex-col gap-3 py-2">
            <div className="text-sm font-medium sm:text-base">{order.deal.description}</div>
            <div className="mt-auto text-sm font-extrabold">Order No. {order.id}</div>
          </div>
        </div>
        <div className="flex grow flex-col gap-7 px-2 py-2 sm:mx-auto sm:max-w-[250px] 2xl:mx-0 2xl:ml-auto">
          <div className="space-x-2">
            <span>Status:</span>
            <OrderStatusBadge variant={order.status} message={order.statusMessage} />
          </div>
          <Link
            href={orderDetailsLink}
            className="mt-auto block rounded-md border p-2 text-center font-bold text-red-600 transition-transform duration-150 ease-in-out hover:scale-105 sm:text-sm"
          >
            Veiw Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderPreview;
