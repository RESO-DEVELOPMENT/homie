import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

export default function OrdersPage() {
  const { data: session } = useSession();

  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios.get('/api/orders').then(response => {
      setOrders(response.data);
    });
  }, []);
  return (
    <Layout>
      <div className="text-blue-900 flex justify-between">
        <h2>
          Hello, <b>{session?.user?.name}</b>
        </h2>
        <div className="flex bg-gray-300 gap-1 text-black rounded-full overflow-hidden">
          <img src={session?.user?.image} alt="img" className="w-8 h-8 rounded-full" />
          <span className="px-2 flex items-center ">
            {session?.user?.name}
          </span>
        </div>
      </div>

      <div className="mt-5">
        <h1>Orders</h1>
        <table className="basic">
          <thead>
            <tr>
              <th>Date</th>
              <th>Paid</th>
              <th>Recipient</th>
              <th>Products</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 && orders.map(order => (
              <tr key={order._id}>
                <td>{(new Date(order.createdAt)).toLocaleString()}
                </td>
                <td className={order.paid ? 'text-green-600' : 'text-red-600'}>
                  {order.paid ? 'YES' : 'NO'}
                </td>
                <td>
                  {order.name} {order.email}<br />
                  {order.city} {order.postalCode} {order.country}<br />
                  {order.streetAddress}
                </td>
                <td>
                  {order.line_items.map(l => (
                    <>
                      {l.price_data?.product_data.name} x
                      {l.quantity}<br />
                    </>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
