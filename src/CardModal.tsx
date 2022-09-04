import Modal from 'react-modal';
import { Link, Outlet } from 'react-router-dom';

function CardModal() {
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
      <Outlet />
      <div className="mt-2">
        <Link className="underline" to="/">
          Go back
        </Link>
      </div>
    </Modal>
  );
}

export default CardModal;
