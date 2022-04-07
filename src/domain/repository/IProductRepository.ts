import { Product } from "../entities/Product";

export interface IProductRepository{
    create(productDto: Product) : Promise<Product| Error>
    findAll(): Promise<Product[]>
    findById(id: string): Promise<Product | Error>
    update(id: string, productDto: Product): Promise<Product | Error>
    remove(id: string): Promise<void | Error> 
}