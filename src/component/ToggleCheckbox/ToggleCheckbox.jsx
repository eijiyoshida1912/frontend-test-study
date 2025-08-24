import React, { useState } from "react";

const ToggleCheckbox = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        利用規約に同意する
      </label>
      <p>{checked ? "同意しました" : "未同意です"}</p>
    </div>
  );
};

export default ToggleCheckbox;
