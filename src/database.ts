import React from "react";

const records = [
  {
    id: "1",
    expiry: {
      month: "7",
      year: "2049"
    },
    display: {
      summary: "Visa ....0091",
      expiry: "Expires 07/2049"
    }
  },
  {
    id: "2",
    expiry: {
      month: "1",
      year: "2030"
    },
    display: {
      summary: "Visa ....5880",
      expiry: "Expires 01/2030"
    }
  },
  {
    id: "3",
    expiry: {
      month: "2",
      year: "2045"
    },
    display: {
      summary: "Amex ....30029",
      expiry: "Expires 02/2045"
    }
  }
];

function useCards() {
  const [cards, setCards] = React.useState(records);
  return { cards, setCards };
}

export function useAllCards() {
  const { cards } = useCards();
  return cards;
}

export function useUpdateCard(id: string) {
  const { setCards } = useCards();

  function updateCard(input: { expiryMonth: string, expiryYear: string }) {
  }

  return updateCard;
}
