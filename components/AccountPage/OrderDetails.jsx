import React from "react";
import ImageWithPlaceholder from "@/components/ImageWithPlaceholder";
import OrderStatusBadge from "@/components/AccountPage/OrderStatusBadge";
import Link from "next/link";

const OrderDetails = ({ order }) => {
  return (
    <>
      <div className="flex justify-between items-center pb-6">
        <h2 className="text-xl sm:text-2xl font-medium">Order No : {`${order.id}`}</h2>
      </div>
      <div className="my-6">
        <div className="flex gap-4 max-w-md">
          <div className="relative aspect-[1.38/1] w-80 sm:w-40 rounded-md overflow-hidden">
            <ImageWithPlaceholder src={order.deal.image} alt="order-image" fill={true} sizes={"50vw"} className={"object-cover"} />
          </div>
          <div>
            <p className="font-medium">{order.deal.description}</p>
          </div>
        </div>
        <div className="mt-6">
          <div className="max-w-xl mx-auto border rounded-lg overflow-hidden">
            <div className="text-lg py-3 text-center font-semibold bg-gray-200">
              <h3>Order Details</h3>
            </div>
            <div className="flex gap-8 justify-between p-3 text-sm sm:text-base border-b border-gray-100">
              <span className="min-w-fit inline-flex items-center">Order Date</span>
              <span className="font-semibold text-end">{order.date}</span>
            </div>
            <div className="flex gap-8 justify-between p-3 text-sm sm:text-base border-b border-gray-100">
              <span className="min-w-fit inline-flex items-center capitalize">{order.type} Type</span>
              <span className="font-semibold text-end">{order.selectedOption}</span>
            </div>
            <div className="flex gap-8 justify-between p-3 text-sm sm:text-base border-b border-gray-100">
              <span className="min-w-fit inline-flex items-center">Quantity</span>
              <span className="font-semibold text-end">{order.quantity}</span>
            </div>
            <div className="flex gap-8 justify-between p-3 text-sm sm:text-base border-b border-gray-100">
              {order.type === "service" && <span className="min-w-fit inline-flex items-center">Service Rendered By</span>}
              {order.type === "product" && <span className="min-w-fit inline-flex items-center">Sold By</span>}
              <span className="font-semibold text-end">{order.vendor}</span>
            </div>
            {order.code && (
              <div className="flex gap-8 justify-between p-3 text-sm sm:text-base border-b border-gray-100">
                <span className="min-w-fit inline-flex items-center">Service Code</span>
                <span
                  className={`font-extrabold text-end block p-3 border-2 border-dashed text-xl tracking-wider border-red-500 ${
                    order.status === "pending" ? "" : "line-through decoration-[3px]"
                  }`}
                >
                  {order.code}
                </span>
              </div>
            )}
            <div className="flex flex-wrap gap-8 justify-between p-3 text-sm sm:text-base border-b border-gray-100">
              <span className="min-w-fit inline-flex items-center">Status</span>
              <OrderStatusBadge variant={order.status} message={order.statusMessage} />
            </div>
            <div className="flex gap-8 justify-between p-3 text-sm sm:text-base border-b border-gray-100">
              <span className="min-w-fit inline-flex items-center">Discount</span>
              <span className="font-semibold text-end">
                {Math.trunc(((order.deal.newPrice - order.deal.prevPrice) * 100) / order.deal.prevPrice)}%
              </span>
            </div>
            <div className="flex gap-8 justify-between p-3 text-sm sm:text-base border-b border-gray-100">
              <span className="min-w-fit inline-flex items-center">Total</span>
              <span className="font-semibold text-end">&#8358;{order.total}</span>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <div className="max-w-xl mx-auto border rounded-lg overflow-hidden">
            <div className="text-lg py-3 text-center font-semibold bg-gray-200">
              <h3>Payment Information</h3>
            </div>
            <div className="flex gap-8 justify-between p-3 text-sm sm:text-base border-b border-gray-100">
              <span className="min-w-fit inline-flex items-center">Payment Method</span>
              <span className="font-semibold text-end">{order.paymentMethod}</span>
            </div>
            <div className="flex gap-8 justify-between p-3 text-sm sm:text-base border-b border-gray-100">
              <span className="min-w-fit inline-flex items-center">Total Amount</span>
              <span className="font-semibold text-end">&#8358;{order.subtotal}</span>
            </div>
          </div>
        </div>
        {order.type === "product" && (
          <div className="mt-6">
            <div className="max-w-xl mx-auto border rounded-lg overflow-hidden">
              <div className="text-lg py-3 text-center font-semibold bg-gray-200">
                <h3>Delivery Information</h3>
              </div>
              <div className="flex gap-8 justify-between p-3 text-sm sm:text-base border-b border-gray-100">
                <span className="min-w-fit inline-flex items-center">Delivery Method</span>
                <span className="font-semibold text-end">{order.deliveryInfo.deliveryMethod}</span>
              </div>
              <div className="flex gap-8 justify-between p-3 text-sm sm:text-base border-b border-gray-100">
                <span className="min-w-fit inline-flex items-center">Delivery Address</span>
                <span className="font-semibold text-end">{order.deliveryInfo.address}</span>
              </div>
              <div className="flex gap-8 justify-between p-3 text-sm sm:text-base border-b border-gray-100">
                <span className="min-w-fit inline-flex items-center">Phone</span>
                <span className="font-semibold text-end">{order.deliveryInfo.phone}</span>
              </div>
            </div>
          </div>
        )}

        {order.status !== "complete" && order.status !== "pending" && (
          <div className="mt-6">
            <button className="mx-auto block bg-sky-600 text-white font-semibold p-2 rounded-md hover:scale-105 transition-transform duration-150 ease-in-out active:scale-95">
              Request For Refund
            </button>
          </div>
        )}
        {order.status === "complete" && (
          <div className="mt-6">
            <Link
              href={`/deals/${order.deal.id}`}
              className="mx-auto block w-fit bg-sky-600 text-white font-semibold p-2 rounded-md hover:scale-105 transition-transform duration-150 ease-in-out active:scale-95"
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
