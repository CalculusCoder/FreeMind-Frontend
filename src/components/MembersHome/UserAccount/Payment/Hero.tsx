import { useSession } from "next-auth/react";
import { useChangeDefaultCard } from "../Hooks/useChangeDefaultCard";
import { useDeleteCard } from "../Hooks/useDeleteCard";
import { usePaymentMethods } from "../Hooks/usePaymentMethods";

type CardsOnFile = {
  id: string;
  brand: string;
  default: boolean;
  last4: string;
};

const Hero = () => {
  const { data: session } = useSession();
  const customerId = session?.user?.stripe_customer_id;

  const changeDefaultCardMutation = useChangeDefaultCard();

  const deleteUserCardMutation = useDeleteCard();

  if (customerId === "") {
    alert("Customer ID is not valid");
  }

  const validCustomerId = customerId ?? "";

  const {
    data: cards,
    isLoading,
    isError,
  } = usePaymentMethods(validCustomerId);

  if (isLoading) {
    return (
      <div className="text-center text-3xl font-semibold mt-6">Loading...</div>
    );
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <div className="flex justify-center flex-col items-center gap-10 mt-6">
      <header className="text-4xl">Current Cards on File</header>
      <div>
        {cards.map((card: CardsOnFile) => {
          return (
            <div key={card.id}>
              {card.default ? (
                <div>
                  Current default credit card: {card.last4} {card.brand}
                </div>
              ) : (
                <div className="flex gap-7">
                  {card.last4} {card.brand}
                  <div>
                    <button
                      onClick={() =>
                        changeDefaultCardMutation.mutate({
                          cardId: card.id,
                          customerId,
                        })
                      }
                    >
                      Set as Default
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => deleteUserCardMutation.mutate(card.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
