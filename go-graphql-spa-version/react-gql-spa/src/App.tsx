import "./App.css";
import { useQuery } from "@apollo/client";

import { gql } from "../__generated__/";

const PokeQuery = gql(/* GraphQL */ `
  query RandomPair {
    randomPair {
      pokemonOne {
        id
        name
      }
    }
  }
`);

function App() {
  const { data, loading } = useQuery(PokeQuery);

  if (loading || !data) return <div>Loading...</div>;

  console.log("data", data);

  return <div>Hello</div>;
}

export default App;
