import React from "react";
import { createRoot } from "react-dom/client";
import { StagewiseToolbar } from "@stagewise/toolbar-react";

const stagewiseConfig = { plugins: [] };

export function mountStagewiseToolbar() {
  if (process.env.NODE_ENV === "development") {
    let el = document.getElementById("stagewise-toolbar-root");
    if (!el) {
      el = document.createElement("div");
      el.id = "stagewise-toolbar-root";
      document.body.appendChild(el);
    }
    createRoot(el).render(<StagewiseToolbar config={stagewiseConfig} />);
  }
}
