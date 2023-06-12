import { useEffect } from "react";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsalAuthentication,
} from "@azure/msal-react";

import "./App.css";
import {
  // InteractionRequiredAuthError,
  InteractionType,
} from "@azure/msal-browser";
import Home from "./pages/Home";

function App() {
  const { result, error } = useMsalAuthentication(InteractionType.Redirect);

  console.log({ result, error });

  useEffect(() => {
    if (result && result.idToken) {
      sessionStorage.setItem("msal.id_token", result.idToken);
    }
  }, [result]);

  return (
    <>
      <p>Anyone can see this paragraph.</p>
      <AuthenticatedTemplate>
        <Home />
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <p>No users are signed in!</p>
      </UnauthenticatedTemplate>
    </>
  );
}

export default App;
