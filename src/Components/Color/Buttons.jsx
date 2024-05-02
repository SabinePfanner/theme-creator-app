export function Buttons({ onClick, onEdit }) {
  return (
    <>
      <button type="button" onClick={onClick}>
        DELETE
      </button>
      <button type="button" onClick={onEdit}>
        EDIT
      </button>
    </>
  );
}
