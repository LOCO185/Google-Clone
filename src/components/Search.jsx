import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

import { useStateContext } from "../contexts/StateContextProvider";
import { Links } from "./Links";

export const Search = () => {
  const { setSearchTerm } = useStateContext();
  const [text, setText] = useState("Elon Musk");
  const [debouncedValue] = useDebounce(text, 300);

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
        Links
    </div>
  );
};
