import axios from "axios";

export async function subgraphQuery(query) {
  try {
    const SUBGRAPH_URL =
      "https://api.thegraph.com/subgraphs/name/meiswinkel1991/learnweb3";
    const response = await axios.post(SUBGRAPH_URL, { query });
    if (response.data.errors) {
      console.error(response.data.errors);
      throw new Error(`Erroir making subgraph query ${response.data.errors} `);
    }
  } catch (err) {
    console.error(error);
    throw new Error(`Could not query the subgraph ${error.message}`);
  }
}
