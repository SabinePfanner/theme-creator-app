export function Buttons({ onAdd, onEdit, onDelete }) {
  return (
    <>
      <select id="theme" name="theme">
        <option value="default"></option>
      </select>
      <button type="button" id="add" name="add" onClick={onAdd}>
        ADD
      </button>
      <button type="button" id="edit" name="edit" onClick={onEdit}>
        EDIT
      </button>
      <button type="button" id="delete" name="delete" onClick={onDelete}>
        DELETE
      </button>
    </>
  );
}
