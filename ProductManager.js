
class ProductManager {
    constructor() {
      this.products = [];
      this.productIdContador = 1;
    }
  
    addProduct(product) {
      // Validacion de campos obligatorios
      if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
        console.error("Todos los campos son obligatorios");
        return;
      }
  
      // Validacion de codigo no repetido
      if (this.products.some(p => p.code === product.code)) {
        console.error("El código del producto ya existe");
        return;
      }
  
      // ID autoincrementable
      product.id = this.productIdContador++;
      this.products.push(product);
      console.log("Producto agregado:", product);
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find(p => p.id === id);
      if (product) {
        return product;
      } else {
        console.error("Producto no encontrado");
        return null;
      }
    }
  } 
  
  // Instanciado
  const productManager = new ProductManager();
  
  productManager.addProduct({
    title: "Monitor Philips ",
    description: "Monitor Philips 221v8/77 21,5'' Full Hd 75 Hz Lcd 4 Ms Color Negro",
    price: 100000,
    thumbnail: "ruta/imagen1.jpg",
    code: "PROD001",
    stock: 30
  });
  
  productManager.addProduct({
    title: "Notebook Acer",
    description: "Notebook Acer Aspire 5 Intel I3 1115g4 4gb Ram 128gb Ssd Windows 11 15.6'' Full Hd Ips Wifi 6",
    price: 700560,
    thumbnail: "ruta/imagen2.jpg",
    code: "PROD002",
    stock: 5
  });
  
  console.log("Producto con ID 1:", productManager.getProductById(1));
  console.log("Producto con ID 4:", productManager.getProductById(4));
  