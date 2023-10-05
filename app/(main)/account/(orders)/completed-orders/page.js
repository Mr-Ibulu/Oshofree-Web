import React from "react";
import { orders } from "@/data/orders";
import OrderPreview from "@/components/AccountPage/OrderPreview";

const CompletedOrders = () => {
  const completeOrders = orders.filter((order) => order.status === "complete");

  return (
    <>
      <h2 className="text-xl sm:text-2xl font-medium">Complete Orders</h2>
      <div className="my-6 space-y-6">
        {completeOrders.map((order) => (
          <OrderPreview order={order} key={order.id} orderDetailsLink={`/account/completed-orders/${order.id}`} />
        ))}
      </div>
    </>
  );
};

export default CompletedOrders;
