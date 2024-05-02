export function ConfirmDelete({ onCancel, onDelete }) {
  return (
    <>
      <p className="color-card-highlight">Really delete?</p>
      <button type="button" onClick={onCancel}>
        CANCEL
      </button>
      <button type="button" onClick={onDelete}>
        DELETE
      </button>
    </>
  );
}
