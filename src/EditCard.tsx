import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useModalForm } from "./CardModal";
import * as Database from './database';

function EditCard() {
  const form = useModalForm();
  const { card, save, setMonth, setYear } = useUpdateCard();

  if (!card.id) {
    return (
      <div>
        Card not found
      </div>
    );
  }
  return (
    <form id={form.id} onSubmit={save}>
      <div className="text-xl font-medium">
        Editing {card.display.summary}
      </div>
      <div className="flex">
        <div className="flex flex-col mr-2">
          <label>Expiry Month</label>
          <input
            className="border rounded p-1"
            type="text"
            value={card.expiry.month}
            onChange={setMonth}
          />
        </div>
        <div className="flex flex-col">
          <label>Expiry year</label>
          <input
            className="border rounded p-1"
            type="text"
            value={card.expiry.year}
            onChange={setYear}
          />
        </div>
      </div>
    </form>
  );
}

function useUpdateCard() {
  const params = useParams();
  const navigate = useNavigate();
  const id = params?.id || '';
  const updateCard = Database.useUpdateCard(id);
  const card = Database.useCard(id);
  const [expiry, setExpiry] = React.useState<Database.CardExpiry>({ month: '', year: '', ...card?.expiry });

  function setMonth(event: any) {
    setExpiry(prev => ({ ...prev, month: event.target.value }));
  }

  function setYear(event: any) {
    setExpiry(prev => ({ ...prev, year: event.target.value }));
  }

  function save(event: any) {
    event.preventDefault();
    console.log('submitting....');

    updateCard(expiry);

    navigate(`/?saved-card-id=${id}`)
  }

  return {
    card: {
      id,
      display: { summary: '', expiry: '' },
      expiry,
    },
    setYear,
    setMonth,
    save,
  };
}

export default EditCard;
