import { createRoot } from "react-dom/client";
// import "./index.css";
import "./index.css";
import { App } from "./App.tsx";

// rome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById("root")!).render(
	<div className="bg-blue-100">
		<App />
	</div>,
);
