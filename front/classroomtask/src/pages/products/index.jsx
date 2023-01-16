import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './index.scss'
const Product = () => {
  const [product,setProduct]=useState([])
  const {id}=useParams()
  const navigate = useNavigate()

  const getProductById = async (id)=>{
    let response = await axios.get (`http://localhost:8000/products/${id}`)
    setProduct(response.data) 
  }
  useEffect(() => {
    getProductById(id)

  }, [])

  const handleDelete = async ()=>{
    let response = await axios.delete (`http://localhost:8000/products/${id}`)
    setProduct(response.data)
    navigate('/')
  }

  return (
    <div className='details'>
       <div className="image"><img src="https://picsum.photos/200/300"alt="" /></div>
        <div className="cardText">
          <h2>Products: {product.name}</h2>
          <h4>Price: {product.price}</h4>
          <h4>Descriptoion: {product.description}</h4>
          
        </div>
        <button onClick={()=>handleDelete()}>Delete</button>
    </div>
  )
}

export default Product