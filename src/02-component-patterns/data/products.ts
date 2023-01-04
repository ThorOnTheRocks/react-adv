import { IProduct } from "../interfaces/ProductInterfaces"

const product1 = {
  id: '1',
  title: 'Coffee Mug - Card',
  image: './coffee-mug.png',
}

const product2 = {
  id: '2',
  title: 'Coffee Mug - Meme',
  image: './coffee-mug2.png',
}

export const products: IProduct[] = [product1, product2]