// You can import a component from Radix or another library to use in your app
import React from "react";
import * as Switch from "@radix-ui/react-switch";
import "./Switch.css";

const SwitchDemo = () => (
  <form>
    <div style={{ display: "flex", alignItems: "center" }}>
      <label
        className="text-white Label"
        htmlFor="fidget-button"
        style={{ paddingRight: 15 }}
      >
        Fidget Button
      </label>
      <Switch.Root className="SwitchRoot" id="airplane-mode">
        <Switch.Thumb className="SwitchThumb" />
      </Switch.Root>
    </div>
  </form>
);

export default SwitchDemo;
