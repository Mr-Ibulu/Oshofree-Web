import React from "react";
import ImageWithPlaceholder from "@/components/ImageWithPlaceholder";
import Link from "next/link";
import OrderStatusBadge from "@/components/UserAccountPage/OrderStatusBadge";

const OrderPreview = ({ order, orderDetailsLink }) => {
  return (
    <div className="border-b border-gray-300 py-4 px-2 rounded-md">
      <div className="flex flex-col xl:flex-row flex-wrap gap-y-4 gap-x-2">
        <div className="flex flex-col items-center sm:flex-row gap-2 sm:gap-4">
          <div className="relative w-44 rounded-md overflow-hidden">
            <ImageWithPlaceholder src={order.deal.image} sizes={"70vw"} />
          </div>
          <div className="flex flex-col max-w-xs py-2 gap-3">
            <div className="text-sm sm:text-base font-medium">{order.deal.description}</div>
            <div className="text-sm font-extrabold mt-auto">Order No. {order.id}</div>
          </div>
        </div>
        <div className="grow py-2 px-2 flex flex-col sm:max-w-[250px] sm:mx-auto 2xl:mx-0 2xl:ml-auto gap-7">
          <div className="space-x-2">
            <span>Status:</span>
            <OrderStatusBadge variant={order.status} message={order.statusMessage} />
          </div>
          <Link
            href={orderDetailsLink}
            className="block border p-2 sm:text-sm rounded-md text-center text-red-600 font-bold mt-auto hover:scale-105 transition-transform duration-150 ease-in-out"
          >
            Veiw Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderPreview;
