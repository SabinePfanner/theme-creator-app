import { ColorInput } from "../Color/ColorInput";

function Colorform({ onAddColor, defaultInput }) {
  defaultInput = {
    role: "some color",
    hex: "#ffffff",
    contrastText: "#000000",
  };

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const color = Object.fromEntries(formData);
    onAddColor(color);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">ADD COLOR</button>
      </form>
      <br />
    </>
  );
}

export default Colorform;
