// api.js
import { API_BASE_URL } from "./config";

export async function checkMembershipStatus(email: string) {
  const response = await fetch(`${API_BASE_URL}/CheckMembership`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    throw new Error("Error checking membership status");
  }

  const { access_expiration } = await response.json();
  if (access_expiration === null) {
    return false;
  }
  const accessExpirationDate = new Date(access_expiration);
  const currentDate = new Date();
  return accessExpirationDate > currentDate;
}
