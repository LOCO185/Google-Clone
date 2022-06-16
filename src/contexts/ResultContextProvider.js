import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const StateContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getResults = async (type) => {
    setLoading(true);

    const res = await fetch(`${baseUrl}${type}`, {
      method: "GET",
      headers: {
        "x-user-agent":'desktop',
        "x-rapidapi-host": "google-search3.p.rapidapi.com",
        "x-rapidapi-key": 'd7a27e4e7dmsh2e39f755ee47d71p1b9f1bjsnd6a4189ba591',
        // "x-rapidapi-key": process.env.REACT_APP_API_KEY,
      },
    });

    const data = await res.json();
    console.log(data);

    setResults(data);
    setLoading(false);
  };

  return (
    <StateContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, loading }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
