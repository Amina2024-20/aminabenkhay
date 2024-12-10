import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = [
    { id: 1, name: 'Pijjot' , price :15000 , image: 'https://th.bing.com/th/id/R.76f3ff9fd603e7077cc19be2f1bd6d69?rik=nBV5twEhSFTuvA&pid=ImgRaw&r=0'},
    { id: 2, name: 'Ferai' , price :20066 , image: 'https://th.bing.com/th/id/R.8dba7335924027ad98b99cbe9df74d0c?rik=bfYod6ImZxD%2fFA&pid=ImgRaw&r=0'},
    { id: 4, name: 'Lambo' , price :18000 , image: 'https://th.bing.com/th/id/OIP.tEhj1HgzP-wk6-geql7WIAHaEK?rs=1&pid=ImgDetMain'},
    { id: 5, name: 'dacia' , price :50009 , image: 'https://th.bing.com/th/id/OIP.adS71kqN9AJbNhfkbYM2_AAAAA?rs=1&pid=ImgDetMain'},
    { id: 6, name: 'Moto' , price :55000 , image: 'https://th.bing.com/th/id/OIP.97tfNJ42i46yBfwh3rA35wHaE7?rs=1&pid=ImgDetMain'},
    { id: 7, name: 'Mazzerati' , price :250000 , image: 'https://th.bing.com/th/id/OIP.x7J9xKc7si6Z289vs2d89QHaE6?rs=1&pid=ImgDetMain'},
    { id: 8, name: 'ClioR' , price :350000 , image: 'https://th.bing.com/th/id/R.76f3ff9fd603e7077cc19be2f1bd6d69?rik=nBV5twEhSFTuvA&pid=ImgRaw&r=0'}
   
  ];
  cart : any = [];
  getProducts() {
    return this.products;
  }
  getCart() {
    return this.cart;
  }
  addTocart(product:any){
    this.cart.push(product);
  }
  removeFormCart(product : any){
    const i =this.cart.indexOf(product);
    if(i > -1){
      this.cart.splice(i,1);
    }
  }

  constructor() { }
}
