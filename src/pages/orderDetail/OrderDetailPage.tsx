import { OrderDetailsCards } from "@components/Cards/OrderDetailsCards";
import landing1 from "../../assets/landing1.png";
import landing2 from "../../assets/landing2.png";

const orders = [
  {
    addons: "Garlic Aioli Dip",
    amount: 1,
    image: landing1,
    item: "LTO Adobo Burger",
    orderId: "CE25",
    remarks: "Please remove onions if there are any.",
    total: 249.0,
  },
  {
    addons: "Garlic Aioli Dip",
    amount: 1,
    image: landing2,
    item: "Premium Soy Garlic Karaage",
    orderId: "CE25",
    remarks: "Please remove onions if there are any.",
    total: 249.0,
  },
];

const totalAmount = orders.reduce((acc, order) => {
  const addonCost = order.addons ? 30 : 0;
  return acc + order.total + addonCost;
}, 0);

export const OrderDetailPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="px-6 py-8">
        <div className="mt-6">
          <OrderDetailsCards orders={orders} />
        </div>

        <div className="mt-10 border-t pt-4">
          <h3 className="text-2xl font-semibold">Payment Summary</h3>
          <div className="mt-2 text-lg">
            {orders.map((order, index) => (
              <p key={index} className="flex justify-between">
                <span>
                  {order.amount}x {order.item}
                </span>
                <span>
                  ₱ {(order.total + (order.addons ? 30 : 0)).toFixed(2)}
                </span>
              </p>
            ))}
          </div>
          <hr className="my-4 border-gray-300" />
          <p className="flex justify-between text-xl font-bold">
            <span>Total (Inclusive of Tax)</span>{" "}
            <span>₱ {totalAmount.toFixed(2)}</span>
          </p>
        </div>
      </section>
    </div>
  );
};
