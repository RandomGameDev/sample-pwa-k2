import { cn } from "@cloudeats/robin-components";

interface OrderDetailsCardsProps {
  orders: {
    addons: string;
    amount: number;
    image: string;
    item: string;
    orderId: string;
    remarks: string;
    total: number;
  }[];
}

export const  OrderDetailsCards = ({ orders }: OrderDetailsCardsProps) => {
  return (
    <div className={cn("px-4 py-6")}>
      <div className="my-4 flex items-end justify-between">
        <h1 className="mb-4 text-6xl">Order Details</h1>
        <h2 className="mb-3 text-4xl text-neutral-500">Dine -in</h2>
      </div>
      {orders.map((order, index) => (
        <div
          key={index}
          className="border-warning-500 mb-10 rounded-lg border-4 bg-neutral-100 p-4"
        >
          <div className="mb-2 flex justify-between">
            <img
              className="mr-4 h-20 w-20 rounded-lg object-cover"
              alt="Order"
              src={order.image}
            ></img>
            <div className="flex flex-col items-end">
              <p className="text-warning-500 text-4xl font-semibold">
                Please pay at the cashier
              </p>
              <span className="text-2xl font-semibold text-neutral-500">
                {order.orderId}
              </span>
            </div>
          </div>
          <hr className="border-1 border-b-neutral-100" />
          <div className="my-4 flex items-center justify-between">
            <p className="text-3xl">
              {order.amount}x {order.item}
            </p>
            <span className="text-3xl font-semibold">
              ₱ {order.total.toFixed(2)}
            </span>
          </div>
          <div className="mt-2 flex justify-between">
            <p className="text-3xl" ml-auto>
              Add ons: {order.addons}
            </p>
            <span className="text-3xl font-semibold">₱ 30.00</span>
          </div>
          <p className="mt-2 text-3xl">Remarks</p>
          <p className="text-3xl text-neutral-500">
            &quot;{order.remarks}&quot;
          </p>
        </div>
      ))}
    </div>
  );
};
