import React from "react";
import ImageWithPlaceholder from "@/components/ImageWithPlaceholder";
import OrderStatusBadge from "@/components/UserAccountPage/OrderStatusBadge";
import Link from "next/link";

const OrderDetails = ({ order }) => {
  return (
    <>
      <div className="flex items-center justify-between pb-6">
        <h2 className="text-xl font-medium sm:text-2xl">Order No : {`${order.id}`}</h2>
      </div>
      <div className="my-6">
        <div className="flex max-w-md gap-4">
          <div className="relative aspect-[1.38/1] w-80 overflow-hidden rounded-md sm:w-40">
            <ImageWithPlaceholder src={order.deal.image} alt="order-image" fill={true} sizes={"50vw"} className={"object-cover"} />
          </div>
          <div>
            <p className="font-medium">{order.deal.description}</p>
          </div>
        </div>
        <div className="mt-6">
          <div className="mx-auto max-w-xl overflow-hidden rounded-lg border">
            <div className="bg-gray-200 py-3 text-center text-lg font-semibold">
              <h3>Order Details</h3>
            </div>
            <div className="flex justify-between gap-8 border-b border-gray-100 p-3 text-sm sm:text-base">
              <span className="inline-flex min-w-fit items-center">Order Date</span>
              <span className="text-end font-semibold">{order.date}</span>
            </div>
            <div className="flex justify-between gap-8 border-b border-gray-100 p-3 text-sm sm:text-base">
              <span className="inline-flex min-w-fit items-center capitalize">{order.type} Type</span>
              <span className="text-end font-semibold">{order.selectedOption}</span>
            </div>
            <div className="flex justify-between gap-8 border-b border-gray-100 p-3 text-sm sm:text-base">
              <span className="inline-flex min-w-fit items-center">Quantity</span>
              <span className="text-end font-semibold">{order.quantity}</span>
            </div>
            <div className="flex justify-between gap-8 border-b border-gray-100 p-3 text-sm sm:text-base">
              {order.type === "service" && <span className="inline-flex min-w-fit items-center">Service Rendered By</span>}
              {order.type === "product" && <span className="inline-flex min-w-fit items-center">Sold By</span>}
              <span className="text-end font-semibold">{order.vendor}</span>
            </div>
            {order.code && (
              <div className="flex justify-between gap-8 border-b border-gray-100 p-3 text-sm sm:text-base">
                <span className="inline-flex min-w-fit items-center">Service Code</span>
                <span
                  className={`block border-2 border-dashed border-red-500 p-3 text-end text-xl font-extrabold tracking-wider ${
                    order.status === "pending" ? "" : "line-through decoration-[3px]"
                  }`}
                >
                  {order.code}
                </span>
              </div>
            )}
            <div className="flex flex-wrap justify-between gap-8 border-b border-gray-100 p-3 text-sm sm:text-base">
              <span className="inline-flex min-w-fit items-center">Status</span>
              <OrderStatusBadge variant={order.status} message={order.statusMessage} />
            </div>
            <div className="flex justify-between gap-8 border-b border-gray-100 p-3 text-sm sm:text-base">
              <span className="inline-flex min-w-fit items-center">Discount</span>
              <span className="text-end font-semibold">
                {Math.trunc(((order.deal.newPrice - order.deal.prevPrice) * 100) / order.deal.prevPrice)}%
              </span>
            </div>
            <div className="flex justify-between gap-8 border-b border-gray-100 p-3 text-sm sm:text-base">
              <span className="inline-flex min-w-fit items-center">Total</span>
              <span className="text-end font-semibold">&#8358;{order.total}</span>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <div className="mx-auto max-w-xl overflow-hidden rounded-lg border">
            <div className="bg-gray-200 py-3 text-center text-lg font-semibold">
              <h3>Payment Information</h3>
            </div>
            <div className="flex justify-between gap-8 border-b border-gray-100 p-3 text-sm sm:text-base">
              <span className="inline-flex min-w-fit items-center">Payment Method</span>
              <span className="text-end font-semibold">{order.paymentMethod}</span>
            </div>
            <div className="flex justify-between gap-8 border-b border-gray-100 p-3 text-sm sm:text-base">
              <span className="inline-flex min-w-fit items-center">Total Amount</span>
              <span className="text-end font-semibold">&#8358;{order.subtotal}</span>
            </div>
          </div>
        </div>
        {order.type === "product" && (
          <div className="mt-6">
            <div className="mx-auto max-w-xl overflow-hidden rounded-lg border">
              <div className="bg-gray-200 py-3 text-center text-lg font-semibold">
                <h3>Delivery Information</h3>
              </div>
              <div className="flex justify-between gap-8 border-b border-gray-100 p-3 text-sm sm:text-base">
                <span className="inline-flex min-w-fit items-center">Delivery Method</span>
                <span className="text-end font-semibold">{order.deliveryInfo.deliveryMethod}</span>
              </div>
              <div className="flex justify-between gap-8 border-b border-gray-100 p-3 text-sm sm:text-base">
                <span className="inline-flex min-w-fit items-center">Delivery Address</span>
                <span className="text-end font-semibold">{order.deliveryInfo.address}</span>
              </div>
              <div className="flex justify-between gap-8 border-b border-gray-100 p-3 text-sm sm:text-base">
                <span className="inline-flex min-w-fit items-center">Phone</span>
                <span className="text-end font-semibold">{order.deliveryInfo.phone}</span>
              </div>
            </div>
          </div>
        )}

        {order.status !== "complete" && order.status !== "pending" && (
          <div className="mt-6">
            <button className="mx-auto block rounded-md bg-sky-600 p-2 font-semibold text-white transition-transform duration-150 ease-in-out hover:scale-105 active:scale-95">
              Request For Refund
            </button>
          </div>
        )}
        {order.status === "complete" && (
          <div className="mt-6">
            <Link
              href={`/deals/${order.deal.id}`}
              className="mx-auto block w-fit rounded-md bg-sky-600 p-2 font-semibold text-white transition-transform duration-150 ease-in-out hover:scale-105 active:scale-95"
            >
              Buy Again
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default OrderDetails;
