import "./App.css";
import React from "react";
import axios from "axios";
import Header from "./components/header/Header";
import Charcters from "./components/characters/Charcters";
import Search from "./components/search/Search";
function App() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [query, setQuery] = React.useState("");
  React.useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      const res = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      setData(res.data);
      setLoading(false);
    };
    fetchDetails();
  }, [query]);

  console.log(data);
  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <Charcters data={data} loading={loading} />
    </div>
  );
}

export default App;
