import React from 'react';
import { createRoot } from "react-dom/client";

import App from "./components/App";

const rootElement = document.getElementById("container");
const root = createRoot(rootElement);

root.render(
	<App />
);