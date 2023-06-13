import { useMsal } from "@azure/msal-react";

const Home = () => {
  const { accounts } = useMsal();
  console.log(accounts[0]);
  return (
    <>
      <p>Bienvenido {accounts[0]?.username}</p>
    </>
  );
};

export default Home;
