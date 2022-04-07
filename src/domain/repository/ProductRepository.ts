import prismaClient from "../../lib/prismaClient";
import { Product } from "../entities/Product";
import { IProductRepository } from "./IProductRepository";

export class ProductRepository implements IProductRepository {
    async create({description, price}: Product): Promise<Product> {
        const product = await prismaClient.product.create({
            data:{
                description,
                price
            }
        });

        return product;
    }
    
    async findAll(): Promise<Product[]> {
        return await prismaClient.product.findMany();

    }

    async findById(id: string): Promise<Product | Error> {
        const product = await prismaClient.product.findFirst({
            where: {
                id
            }
        })

        if(!product) return new Error('product not exist!')

        return product
    }

    async update(id: string, {description, price}: Product): Promise<Product> {
       const productUpdated = await prismaClient.product.update({
            where: {
                id
            },
            data :{
                description,
                price
            }
        });
        

        return productUpdated
    }
    async remove(id: string): Promise<void> {
        await prismaClient.product.delete({
            where: {
                id
            }
        })
    }
    
}