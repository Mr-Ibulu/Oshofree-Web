import React from "react";
import { orders } from "@/data/orders";
import OrderPreview from "@/components/UserAccountPage/OrderPreview";

const OpenOrders = () => {
  const openOrders = orders.filter((order) => order.status === "pending");
  return (
    <>
      <h2 className="text-xl font-medium sm:text-2xl">Open Orders</h2>
      <div className="my-6 space-y-6">
        {openOrders.map((order) => (
          <OrderPreview order={order} key={order.id} orderDetailsLink={`/account/open-orders/${order.id}`} />
        ))}
      </div>
    </>
  );
};

export default OpenOrders;
