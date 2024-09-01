import { useMutation } from "react-query";
import { API_BASE_URL } from "../../../../../config";

interface MutationVariables {
  customerId: string | undefined;
  cardId: string;
}

export const useChangeDefaultCard = () => {
  return useMutation(
    async ({ customerId, cardId }: MutationVariables) => {
      const response = await fetch(`${API_BASE_URL}/api/defaultcard`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ customerId, cardId }),
      });

      if (!response.ok) {
        throw new Error("Error changing default card");
      }

      return response.json();
    },
    {
      onSuccess: () => {
        alert("Default Card Changed Successfully");
      },
      onError: () => {
        alert("Error changing default card");
      },
    }
  );
};
