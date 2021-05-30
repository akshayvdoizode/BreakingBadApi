import React from "react";
import Loading from "../loading/Loading";
import CharacterList from "./CharacterList";
import "./List.css";
const Charcters = ({ data, loading }) => {
  return loading ? (
    <Loading />
  ) : (
    <section className="cards">
      {data.map((item) => (
        <CharacterList key={item.char_id} item={item} />
      ))}
    </section>
  );
};

export default Charcters;
