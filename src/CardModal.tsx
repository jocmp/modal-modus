import Modal from 'react-modal';
import { Link, Outlet, useMatch, useNavigate, useOutletContext, useParams } from 'react-router-dom';

interface Form {
  id: string;
  onSelect: (cardID: string) => void;
}

function CardModal() {
  const form = useForm();

  return (
    <Modal
      isOpen
      style={{
          content: {
            maxWidth: "40rem",
            maxHeight: "40rem",
          }
        }
      }
    >
      <Outlet context={form} />
      {form &&
        <div className="mt-1">
          <Link className="underline" to="/cards">
            Show all
          </Link>
        </div>
      }
      <div className="mt-2">
        {form &&
          <button
            type="submit"
            className="border rounded px-2 mt-2 mr-2"
            form={form.id}
          >
            {'Save & Continue'}
          </button>
        }
        <Link className="border rounded px-2 mt-2" to="/">
          Go back
        </Link>
      </div>
    </Modal>
  );
}

export function useModalForm() {
  return useOutletContext<Form>();
}

function useForm() {
  const id = useParams()?.id;
  const editPath = useMatch(`/cards/${id}`);
  const navigate = useNavigate();

  function onSelect(cardID: string) {
    navigate(`/?saved-card-id=${cardID}`)
  }

  if (editPath) {
    return {
      id: 'card-edit-form',
      onSelect,
    };
  }

  return null
}

export default CardModal;
