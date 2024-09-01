import { useMutation, useQueryClient } from "react-query";
import { API_BASE_URL } from "../../../../../config";

interface MutationVariables {
  userEmail: string;
}

export const useCancelMembership = () => {
  const queryClient = useQueryClient();
  return useMutation<MutationVariables, Error, any>(async ({ userEmail }) => {
    const response = await fetch(`${API_BASE_URL}/CancelMembership`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userEmail,
      }),
    });

    if (response.ok) {
      alert("Subscription cancelled!");
    }

    if (!response.ok) {
      let error;
      queryClient.invalidateQueries('subscriptionStatus'); 
      switch (response.status) {
        case 401:
          alert("Subscription is already canceled");
          break;
        case 403:
          alert("Customer not found");
          break;
        case 404:
          alert("Subscription not found");
          break;
        default:
          alert("Failed to cancel the subscription");
          break;
      }
      throw new Error(error);
    }

    return response.json();
  });
};
