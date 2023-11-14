import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosClient";

const useOrder = () => {
  const [orders, setOrders] = useState({});
  const [loading, setLoading] = useState(false);

  const getOrderList = () => {
    const orderList = localStorage.getItem("orderList");
    return orderList ? JSON.parse(orderList) : [];
  };

  const saveOrderList = (orderId) => {
    const orderList = getOrderList();
    orderList.push(orderId);
    localStorage.setItem("orderList", JSON.stringify(orderList));
  };

  useEffect(() => {
    const FetchOrderIds = async () => {
      const orderList = getOrderList();

      const orderListById = orderList.map((id) => {
        return axiosInstance.get(`/users/orders/${id}`);
      });

      const result = await Promise.all(orderListById);
      setOrders(result);
      setLoading(true);
    };

    FetchOrderIds();
  }, []);

  return { orders, loading, saveOrderList };
};

export default useOrder;
