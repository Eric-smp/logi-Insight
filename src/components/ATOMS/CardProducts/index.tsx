import * as Styles from "./styles";
import Axios from "axios";
import {TCreateProduct} from '@/types'
import { useEffect, useState } from "react";

export function CardProducts() {

   const [produtos, setProdutos] = useState<TCreateProduct[]>([]);

  const fetchProducts = async () => {
    const url = `${process.env.GET_PRODUCT}`
    try {
      const res = await Axios.get('http://localhost:8080/produto/list')
      if (Array.isArray(res.data)) {
        setProdutos(res.data);
      } else {
        console.error('Data is not an array:', res.data);
      }
    } catch (error) {
    console.log(error)    
    }
  };
  
  useEffect(() => { 
    fetchProducts();
  }, []);
  return (
    <>
      {produtos.map((produ, index) => (
        <Styles.ContentCard key={index}>
          <h1>{produ.nomeProduto}</h1>
          <h3>Quantidade: {produ.quantidade}</h3>
        </Styles.ContentCard>
      ))}
    </>
  );
}