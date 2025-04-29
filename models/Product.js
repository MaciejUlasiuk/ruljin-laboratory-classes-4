class Product {
    static #products = [];
  
    constructor(name, description) {
      this.name = name;
      this.description = description;
    }
  
    
    static getAll() {
      return Product.#products;
    }
  
   
    static add(product) {
      Product.#products.push(product);
    }
  
    
    static findByName(name) {
      return Product.#products.find((product) => product.name === name);
    }
  
   
    static deleteByName(name) {
      const index = Product.#products.findIndex((product) => product.name === name);
      if (index !== -1) {
        Product.#products.splice(index, 1);
      }
    }
  
  
    static getLast() {
      if (Product.#products.length > 0) {
        return Product.#products[Product.#products.length - 1];
      }
      return undefined;
    }
  }
  
  module.exports = Product;