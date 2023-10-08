import React from "react";
import { orders } from "@/data/orders";
import OrderDetails from "@/components/UserAccountPage/OrderDetails";

export function generateStaticParams() {
  const closedOrders = orders.filter((order) => order.status === "cancelled");
  return closedOrders.map((order) => ({ orderId: order.id }));
}

const ClosedOrderDetails = ({ params }) => {
  const order = orders.find((order) => order.id === params.orderId);

  return <OrderDetails order={order} />;
};

export default ClosedOrderDetails;
