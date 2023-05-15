import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import { getProducts, getProductoPorCategoria } from '../../asyncmock.js';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const {idCategoria} = useParams()

  useEffect(()=>{

    const funcionProductos = idCategoria ? getProductoPorCategoria : getProducts;

    funcionProductos(idCategoria)
    .then(res => setProducts(res))
    .catch(error => console.log (error))
    
  }, [idCategoria]);

  return (
    <ItemList products={products} />
  )
}

export default ItemListContainer
