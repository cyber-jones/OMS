import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { presistor, store } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { SnackbarProvider } from "notistack";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import { BrowserRouter } from "react-router-dom";
import { SocketProvider } from "./context/SocketContext.jsx";

// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === "production") {
  disableReactDevTools();
}

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={presistor}>
        <SnackbarProvider>
          <App />
        </SnackbarProvider>
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
