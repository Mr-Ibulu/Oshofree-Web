import React from "react";
import { orders } from "@/data/orders";
import OrderPreview from "@/components/AccountPage/OrderPreview";

const ClosedOrders = () => {
  const closeOrders = orders.filter((order) => order.status === "cancelled");

  return (
    <>
      <h2 className="text-xl sm:text-2xl font-medium">Closed Orders</h2>
      <div className="my-6 space-y-6">
        {closeOrders.map((order) => (
          <OrderPreview order={order} key={order.id} orderDetailsLink={`/account/closed-orders/${order.id}`} />
        ))}
      </div>
    </>
  );
};

export default ClosedOrders;