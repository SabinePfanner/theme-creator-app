import { ColorInput } from "../Color/ColorInput.jsx";

function Colorform({
  onAddColor,
  defaultInput = {
    role: "some color",
    hex: "#ffffff",
    contrastText: "#000000",
  },
  isEdit,
  onUpdateColor,
}) {
  function handleAddColor(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const color = Object.fromEntries(formData);

    if (isEdit) {
      color.id = defaultInput.id;
      onUpdateColor(color);
    } else {
      onAddColor(color);
    }
  }

  return (
    <>
      <form onSubmit={handleAddColor}>
        <label htmlFor="role">Role</label>
        <br />
        <input
          id="role"
          name="role"
          type="text"
          defaultValue={defaultInput.role}
        />
        <br />
        <label htmlFor="hex">Hex</label>
        <br />
        <ColorInput id="hex" defaultValue={defaultInput.hex} />
        <br />
        <label htmlFor="contrast">Contrast Text</label>
        <br />
        <ColorInput id="contrast" defaultValue={defaultInput.contrastText} />
        <br />
        {isEdit ? (
          <button type="submit">UPDATE COLOR</button>
        ) : (
          <button type="submit">ADD COLOR</button>
        )}
      </form>
      <br />
    </>
  );
}

export default Colorform;
