import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsalAuthentication,
} from "@azure/msal-react";

import {
  // InteractionRequiredAuthError,
  InteractionType,
} from "@azure/msal-browser";
import Home from "./pages/Home";
import Header from "./components/corporativo/Header";

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
      <AuthenticatedTemplate>
        <Container fluid>
          <Header />
          <Home />
        </Container>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <p>No users are signed in!</p>
      </UnauthenticatedTemplate>
    </>
  );
}

export default App;
