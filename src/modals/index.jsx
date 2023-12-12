import modals from '~/routes/modals.js';
import { useModal } from '~/store/modal/hooks.js';
import { removeModal } from '~/store/modal/actions.js';

export default function Modal() {
  const modal = useModal();
  const currentModal = modals.find((m) => m.name === modal.name);
  return (
    <div
      className={
        'fixed inset-0 bg-[color:var(--background-modal)] flex items-center justify-center z-20'
      }
    >
      <div
        className={
          'bg-[color:var(--background-primary)] max-w-[600px]  max-h-[90vh] rounded-2xl overflow-auto'
        }
      >
        {currentModal && <currentModal.element close={removeModal} />}
      </div>
    </div>
  );
}
