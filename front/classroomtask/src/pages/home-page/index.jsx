import React, { useEffect } from "react";
import { useState } from "react";
import "./index.scss";
import axios from "axios";
import SearchInput from "../../components/input-search";
import { Link } from "react-router-dom";
import { slice } from 'lodash'
const HomePage = () => {
  const [data,setData]=useState([])
  const [isCompleted, setIsCompleted] = useState(false)
  const [index, setIndex] = useState(3)
  const initialPosts = slice(data, 0, index)
  const getData = async()=>{
    const response = await axios ("http://localhost:8000/products");
    setData(await response.data)
  }
  useEffect(() => {
  getData();
  }, [])
  const loadMore = () => {
    setIndex(index + 3)
    console.log(index)
    if (index >= data.length) {
      setIsCompleted(true)
    } else {
      setIsCompleted(false)
    }
  }
const handleSort=()=>{
  // axios.get("http://localhost:8000/products").then((data)=>{
  //   let sort = data.data.sort((a,b)=>Number(a.price)-Number(b.price))
  //   setData([...sort])

  // }
  // )
  const sortedData = data.sort((a,b) => a.price - b.price)
  setData([...data], sortedData)


}

  return (
    <div className="data">
      <button onClick={()=>handleSort()}>Sort by Price</button>
  <SearchInput setData={setData}/>
  <div className="allcard">
    {initialPosts.map((element,i)=>{
      return(
        <Link to={`/add-products/${element.id}`}>
           <div className="card"  key={i}>
        <div className="image"><img src="https://picsum.photos/200/300"alt="" /></div>
        <div className="cardText">
          <h2>Name: {element.name}</h2>
          <h4>Price: {element.price}</h4>
          <h4>Descriptoion: {element.description}</h4>
          
        </div>
        </div>
        </Link>
       )
      })}
      </div>
    <button onClick={()=>loadMore()}>Load More</button>
    </div>
  );
};

export default HomePage;
