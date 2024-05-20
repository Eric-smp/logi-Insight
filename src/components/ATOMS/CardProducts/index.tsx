import * as Styles from "./styles";
import Axios from "axios";
import {TCreateProduct} from '@/types'
import { useEffect, useState } from "react";

export function CardProducts() {

   const [produtos, setProdutos] = useState<TCreateProduct[]>([]);

  const fetchProducts = async () => {
    const url = `${process.env.GET_PRODUCT}`
    try {
      const res = await Axios.get('https://37b2-2804-214-8134-89ad-7128-c40a-7f45-42f2.ngrok-free.app/produto/list')
       setProdutos(res.data);
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
