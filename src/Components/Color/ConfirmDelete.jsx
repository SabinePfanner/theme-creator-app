export function ConfirmDelete({ onClick }) {
  return (
    <>
      <p className="color-card-highlight">Really delete?</p>
      <button type="button" onClick={onClick}>
        CANCEL
      </button>
    </>
  );
}
