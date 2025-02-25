import { Button } from "@components/Button/Button";
import React, { useState } from "react";
import { OrderDetailPage } from "../orderDetail/OrderDetailPage";

interface OrderPageProps {
  paymentId: string;
  amountDue: number;
  imageSrc: string[];
}

export const PaymentSummaryPage: React.FC<OrderPageProps> = ({
  paymentId,
  amountDue,
  imageSrc,
}) => {
  const [showOrderDetails, setShowOrderDetails] = useState(false);

  const handleViewOrderDetails = () => {
    setShowOrderDetails(true);
  };

  return (
    <div className="flex min-h-screen flex-col items-center bg-white">
      {showOrderDetails ? (
        <OrderDetailPage />
      ) : (
        <>
          <div className="mt-10 flex flex-col items-center px-6 text-center">
            <h2 className="text-lg font-medium text-gray-600">
              Total Amount Due
            </h2>
            <p className="mt-2 text-4xl font-bold">₱ {amountDue.toFixed(2)}</p>

            <p className="mt-4 text-sm text-gray-500">
              To complete your payment and receive a queue number, please
              present your payment ID to the cashier.
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

            <div className="mt-8 w-full space-y-4">
              <Button
                type="button"
                className="w-full"
                onClick={handleViewOrderDetails}
                variant={"primary"}
              >
                View Order Details
              </Button>
              <Button
                type="button"
                className="w-full"
                onClick={handleViewOrderDetails}
                variant={"tertiary"}
              >
                Back to Homepage
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
