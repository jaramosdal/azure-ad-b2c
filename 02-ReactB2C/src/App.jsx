import { useEffect } from "react";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
  useMsalAuthentication,
} from "@azure/msal-react";

import "./App.css";
import {
  // InteractionRequiredAuthError,
  InteractionType,
} from "@azure/msal-browser";

function App() {
  const { result, error } = useMsalAuthentication(InteractionType.Redirect);

  console.log({ result, error });

  // useEffect(() => {
  //   console.log(error);
  //   if (error instanceof InteractionRequiredAuthError) {
  //     console.log("Error silent login");
  //     login(InteractionType.Popup);
  //   }
  // }, [error, login]);

  const { accounts } = useMsal();

  return (
    <>
      <p>Anyone can see this paragraph.</p>
      <AuthenticatedTemplate>
        <p>Signed in as: {accounts[0]?.username}</p>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <p>No users are signed in!</p>
      </UnauthenticatedTemplate>
    </>
  );
}

export default App;
