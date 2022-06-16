import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";

import { useStateContext } from "../contexts/ResultContextProvider";
import { Loading } from "./Loading";

const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useStateContext();
  const location = useLocation();


  if (isLoading) return <Loading />;

  switch (location.pathname) {
    case "/search":
      return "SEARCH";
    case "/images":
      return "SEARCH";

    case "/news":
      return "SEARCH";

    case "/videos":
      return "SEARCH";

    default:
      return "ERROR";
  }
};

export default Results;