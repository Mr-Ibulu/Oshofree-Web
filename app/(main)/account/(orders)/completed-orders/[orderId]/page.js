import React from "react";
import { orders } from "@/data/orders";
import OrderDetails from "@/components/UserAccountPage/OrderDetails";

export function generateStaticParams() {
  const completeOrders = orders.filter((order) => order.status === "complete");
  return completeOrders.map((order) => ({ orderId: order.id }));
}

const CompletedOrderDetails = ({ params }) => {
  const order = orders.find((order) => order.id === params.orderId);
  return <OrderDetails order={order} />;
};

export default CompletedOrderDetails;
