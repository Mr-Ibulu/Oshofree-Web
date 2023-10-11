import React from "react";
import { orders } from "@/data/orders";
import OrderPreview from "@/components/UserAccountPage/OrderPreview";

const CompletedOrders = () => {
  const completeOrders = orders.filter((order) => order.status === "complete");

  return (
    <>
      <h2 className="text-xl font-medium sm:text-2xl">Complete Orders</h2>
      <div className="my-6 space-y-6">
        {completeOrders.map((order) => (
          <OrderPreview order={order} key={order.id} orderDetailsLink={`/account/completed-orders/${order.id}`} />
        ))}
      </div>
    </>
  );
};

export default CompletedOrders;
