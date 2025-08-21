import { useState } from "react";

export default function NameForm() {
  const [name, setName] = useState("");
  return (
    <form>
      <label>
        名前:
        <input
          aria-label="名前"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <p>こんにちは、{name || "名無しさん"}！</p>
    </form>
  );
}
