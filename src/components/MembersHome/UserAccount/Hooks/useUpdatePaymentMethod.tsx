import { useMutation } from "react-query";
import { API_BASE_URL } from "../../../../../config";

interface MutationVariables {
  paymentMethodId: string;
  customerId: string | undefined;
}

export const useUpdatePaymentMethod = () => {
  return useMutation<MutationVariables, Error, any>(
    async ({ paymentMethodId, customerId }) => {
      const response = await fetch(`${API_BASE_URL}/api/payment-method`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paymentMethodId,
          customerId,
        }),
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Error updating payment method");
      }

      return response.json();
    }
  );
};
