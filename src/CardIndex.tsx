import { Link } from "react-router-dom";
import { useAllCards } from "./database";

function CardIndex() {
  const creditCards = useAllCards();

  return (
    <ul className="list-none">
      {creditCards.map(creditCard => (
        <li key={creditCard.id}>
          <div className="flex">
            <div className="flex-1">
              <div className="font-semibold">
                {creditCard.display.summary}
              </div>
              <div>
                {creditCard.display.expiry}
              </div>
            </div>

            <Link className="underline" to={creditCard.id}>
              Edit
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CardIndex;
