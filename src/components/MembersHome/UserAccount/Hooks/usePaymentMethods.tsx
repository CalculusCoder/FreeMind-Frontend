import { useQuery } from "react-query";
import { API_BASE_URL } from "../../../../../config";

const fetchPaymentMethod = async (customerId: string) => {
  const res = await fetch(`${API_BASE_URL}/api/payment-method/${customerId}`);
  const paymentMethod = await res.json();
  return paymentMethod;
};

export const usePaymentMethods = (customerId: string) => {
  return useQuery("paymentMethod", () => fetchPaymentMethod(customerId), {
    enabled: !!customerId,
  });
};
