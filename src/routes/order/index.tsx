import { Button } from "@components/Button/Button";
import React from "react";
import { useNavigate } from "react-router";
import { Icon, Typography } from "@cloudeats/robin-components";
import landing1 from "../../assets/landing1.png";

export const OrderStatusStateList: React.FC = () => {
  const isPreparing = true;
  return (
    <div className="flex flex-col items-center justify-between px-6 text-center">
      <div className="mt-20">
        <Typography className="text-xl font-semibold text-gray-800">
          {isPreparing
            ? "We're getting your order ready!"
            : "Your order is ready for pick-up!"}
        </Typography>
        <Typography className="mt-2 text-sm text-gray-500">
          {isPreparing
            ? "Sit tight while we work on making things delicious."
            : "Please proceed to the counter to collect your order."}
        </Typography>
      </div>
    </div>
  );
};

interface OrderStatusProps {
  queueNumber: string;
  status: "preparing" | "ready";
  image?: string;
}

export const OrderStatusState: React.FC<OrderStatusProps> = ({
  queueNumber,
  status,
  image = landing1,
}) => {
  const isPreparing = status === "preparing";

  return (
    <div className="shadow-3xl mt-6 flex flex-col items-center rounded-lg px-4 py-3">
      {isPreparing ? (
        <div className="bg-secondary-100 mb-4 flex items-center rounded-full px-3 py-1">
          <Icon icon="BowlSteam" size="md" className="text-secondary-500" />
          <Typography className="text-secondary-500 pl-1 text-center font-medium">
            Preparing order
          </Typography>
        </div>
      ) : (
        <div className="bg-success-100 mb-4 flex items-center rounded-full px-3 py-1">
          <Icon icon="Bell" size="md" className="text-success-500" />
          <Typography className="text-success-500 pl-1 text-center font-medium">
            Ready for pick up
          </Typography>
        </div>
      )}
      <div className="flex items-center space-x-2">
        <img src={image} className="h-10" />
        <div>
          <Typography>Queue No.</Typography>
          <Typography className="mt-2 text-3xl font-bold text-gray-900">
            {queueNumber}
          </Typography>
        </div>
      </div>
    </div>
  );
};

interface OrderPageProps {
  paymentId: string;
  amountDue: number;
  imageSrc: string[];
}

export const OrderPage: React.FC<OrderPageProps> = ({
  paymentId,
  amountDue = 111,
  imageSrc = [],
}) => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center bg-white">
      <div className="mt-10 flex flex-1 flex-col items-center px-6 text-center">
        <h2 className="text-lg font-medium text-gray-600">Total Amount Due</h2>
        <p className="mt-2 text-4xl font-bold">₱ {amountDue.toFixed(2)}</p>

        <p className="mt-4 text-sm text-gray-500">
          To complete your payment and receive a queue number, please present
          your payment ID to the cashier.
        </p>
        <div className="mt-6">
          <p className="text-lg font-semibold text-gray-700">Payment ID</p>
          <p className="mt-1 text-2xl font-bold">{paymentId}</p>
        </div>

        <div className="mt-4 flex space-x-4">
          {imageSrc.map((src, index) => (
            <img key={index} src={src} className="h-10" />
          ))}
        </div>

        <div className="fixed bottom-0 w-full bg-white p-4 shadow-md">
          <Button
            type="button"
            className="mb-2 w-full"
            onClick={() => navigate("details")}
            variant={"primary"}
          >
            View Order Details
          </Button>
          <Button
            type="button"
            className="w-full"
            onClick={() => navigate("/")}
            variant={"tertiary"}
          >
            Back to Homepage
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
