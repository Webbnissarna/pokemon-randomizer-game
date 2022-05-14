import { useState } from "react";
import TextInput from ".";

export function Default() {
  const [text, setText] = useState("Hello");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <h1>Normal</h1>
      <TextInput
        value={text}
        onChange={(event) => {
          setText(event.currentTarget.value);
        }}
        placeholder="Normal input field"
      />

      <h1>Placeholder</h1>
      <TextInput
        value={""}
        onChange={() => undefined}
        placeholder="Placeholder text"
      />

      <h1>Disabled</h1>
      <TextInput
        disabled={true}
        value={text}
        onChange={() => undefined}
        placeholder="Disabled field"
      />
    </div>
  );
}
