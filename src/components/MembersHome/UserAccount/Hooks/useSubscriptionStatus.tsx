import { useQuery } from "react-query";
import { API_BASE_URL } from "../../../../../config";

interface QueryVariables {
  userEmail: string | null | undefined;
}

export const useSubscriptionStatus = ({ userEmail }: QueryVariables) => {
  return useQuery(['subscriptionStatus', userEmail], async () => {
    const response = await fetch(`${API_BASE_URL}/GetSubscriptionStatus`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userEmail,
      }),
    });

    if (!response.ok) {
      // Handle errors as you see fit
      throw new Error('Failed to fetch subscription status');
    }

    const data = await response.json();
    console.log(data);

    return data.status;
  });
};
