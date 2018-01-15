
export class ProductService{
    get(){
        return [
            {id:1, brand:"Nokia", model:"N8", price:200, inStock:true, lastUpdated:Date.now()}, 
            {id:1, brand:"Apple", model:"IPhone 8", price:600, inStock:true, lastUpdated:Date.now()}, 
            {id:1, brand:"Samsung", model:"S8", price:700, inStock:false, lastUpdated:Date.now()}, 
            {id:1, brand:"Sony", model:"Xperia Z", price:800, inStock:false, lastUpdated:Date.now()}
        ]
    }
}