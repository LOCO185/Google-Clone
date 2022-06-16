import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";

import { useStateContext } from "../contexts/ResultContextProvider";
import { Loading } from "./Loading";

const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useStateContext();
  const location = useLocation();

  useEffect(() => {
    getResults("/search/q=JavaScript Mastery&num=40");
  }, []);

  if (isLoading) return <Loading />;

  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {results?.results?.map(({ link, title }, index) => (
            <div key={index} className="md:w-2/5 w-full">
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-sm">
                  {link.length > 30 ? link.substring(0, 30) : link}
                </p>
                <p className="text-lg hover:underline dark:text-blue-30 text-blue-700">
                  {title}
                </p>
              </a>
            </div>
          ))}
        </div>
      );

    case "/images":
      return "SEARCH";

    case "/news":
      return "SEARCH";

    case "/videos":
      return "SEARCH";

    default:
      return "ERROR";
  }
  // return (
  // <div>
  //   Results
  //   </div>
  // )
};

export default Results;
