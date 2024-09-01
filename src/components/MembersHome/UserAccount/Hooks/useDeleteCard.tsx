import { useMutation } from "react-query";
import { API_BASE_URL } from "../../../../../config";

export const useDeleteCard = () => {
  return useMutation(
    async (cardId: string) => {
      const response = await fetch(`${API_BASE_URL}/api/payment-method`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cardId }),
      });

      if (!response.ok) {
        throw new Error("Error deleting card");
      }

      return response.json();
    },
    {
      onSuccess: () => {
        alert("Card Deleted Successfully");
      },
      onError: () => {
        alert("Error deleting card");
      },
    }
  );
};
