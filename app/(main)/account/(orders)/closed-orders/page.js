import React from "react";
import { orders } from "@/data/orders";
import OrderPreview from "@/components/UserAccountPage/OrderPreview";

const ClosedOrders = () => {
  const closeOrders = orders.filter((order) => order.status === "cancelled");

  return (
    <>
      <h2 className="text-xl font-medium sm:text-2xl">Closed Orders</h2>
      <div className="my-6 space-y-6">
        {closeOrders.map((order) => (
          <OrderPreview order={order} key={order.id} orderDetailsLink={`/account/closed-orders/${order.id}`} />
        ))}
      </div>
    </>
  );
};

export default ClosedOrders;
