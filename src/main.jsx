import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { SupabaseProvider } from "./integrations/supabase/index.js"; // Import SupabaseProvider
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <SupabaseProvider> {/* Wrap the app with SupabaseProvider */}
        <App />
      </SupabaseProvider>
    </ChakraProvider>
  </React.StrictMode>
);
