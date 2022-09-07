import React from "react";

export interface Card {
  id: string;
  expiry: {
    month: string;
    year: string;
  };
  display: {
    summary: string;
    expiry: string;
  }
}

const records = [
  {
    id: "1",
    expiry: {
      month: "7",
      year: "2049"
    },
    display: {
      summary: "Visa ....0091",
      expiry: "Expires 7/2049"
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
      expiry: "Expires 1/2030"
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
      expiry: "Expires 2/2045"
    }
  }
];

function useCards() {
  const [cards, setCards] = React.useState(records);
  return { cards, setCards };
}

export function useAllCards(): Card[] {
  const { cards } = useCards();
  return cards;
}

export function useCard(id: string | undefined | null): Card | undefined {
  const { cards } = useCards();
  if (!id) { return undefined };

  return cards.find((card) => card.id === id);
}

export type CardExpiry = { month: string, year: string };

export function useUpdateCard(id: string) {
  const { cards, setCards } = useCards();

  function updateCard(input: CardExpiry) {
    const index = cards.findIndex((card) => card.id === id);
    const card = cards[index]

    card.expiry.month = input.month;
    card.expiry.year = input.year;
    card.display.expiry = `Expires ${input.month}/${input.year}`
    cards[index] = card;

    setCards(cards);
  }

  return updateCard;
}
