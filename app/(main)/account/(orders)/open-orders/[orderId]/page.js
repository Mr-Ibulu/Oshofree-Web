import React from "react";
import { orders } from "@/data/orders";
import OrderDetails from "@/components/UserAccountPage/OrderDetails";

export function generateStaticParams() {
  const pendingOrders = orders.filter((order) => order.status === "pending");
  return pendingOrders.map((order) => ({ orderId: order.id }));
}

const OpenOrderDetails = ({ params }) => {
  const order = orders.find((order) => order.id === params.orderId);
  return <OrderDetails order={order} />;
};

export default OpenOrderDetails;
