// src/DataFetcher.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=10"
        );
        const detailedData = await Promise.all(
          response.data.results.map(async (pokemon) => {
            const result = await axios.get(pokemon.url);
            return result.data;
          })
        );
        setData(detailedData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredData = data.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex flex-col items-center">
      <input
        type="text"
        placeholder="Search Pokémon"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded-lg"
      />
      <div className="flex flex-wrap justify-center">
        {filteredData.map((pokemon) => (
          <Card
            key={pokemon.name}
            name={pokemon.name}
            url={pokemon.url}
            image={pokemon.sprites.front_default}
          />
        ))}
      </div>
    </div>
  );
};

export default DataFetcher;
