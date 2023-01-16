import React, { useEffect, useState } from "react";
import axios from "axios";

const SearchInput = ({ setData }) => {
  const BASE_URL = "http://localhost:8000/products";

  const [name, setName] = useState([]);
  useEffect(() => {
    axios.get(BASE_URL).then((data) => setName(data.data));
  }, []);

  const searchName = (e) => {
    let newData = name.filter((element) =>
      element.name
        .toLocaleLowerCase()
        .includes(e.target.value.toLocaleLowerCase())
    );
    setData(newData);
  };

  return (
    <div>
      <div className="input">
        <input type="text" onChange={(e) => searchName(e)}  placeholder="search for fun..."/>
      </div>
    </div>
  );
};

export default SearchInput;
