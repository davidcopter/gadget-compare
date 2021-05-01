import axios from 'axios';
import { Product } from '../../interfaces/prodect.interface';

export function fetchProducts(word: string) {
  return axios.get<Product>('http://localhost:3000/product', {
    params: { word },
  });
}
