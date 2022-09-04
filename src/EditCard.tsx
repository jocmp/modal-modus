import { Link, useParams } from "react-router-dom";
import { creditCards } from "./database";

function EditCard() {
  const card = useCard();

  if (!card) {
    return (
      <div>
        Card not found
      </div>
    );
  }

  return (
    <div>
      <form>
        <div className="flex">
          <div className="flex flex-col mr-2">
            <label>Expiry Month</label>
            <input className="border" type="text" value={card.expiry.month} />
          </div>
          <div className="flex flex-col">
            <label>Expiry year</label>
            <input className="border" type="text" value={card.expiry.year} />
          </div>
        </div>
      </form>
      <div className="mt-1">
        <Link className="underline" to="/cards">
          Show all
        </Link>
      </div>
    </div>
  );
}

function useCard() {
  const params = useParams();
  return creditCards.find(card => card.id === params.id);
}

export default EditCard;
