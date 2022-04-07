import { Request, Response } from "express";
import { ProductRepository } from "../domain/repository/ProductRepository";

export class ProductController {

    async create(request: Request, response: Response){
        const { description, price } = request.body;

        const productRepo = new ProductRepository();
        const product = await productRepo.create({
            description, price
        });

        response.json(product)
    }

    async findAll(request: Request, response: Response){
        const productRepo = new ProductRepository();
        const products = await productRepo.findAll();
        response.json(products)
    }

    async findById(request: Request, response: Response){
        const productRepo = new ProductRepository();
        const product = await productRepo.findById(request.params.id);
        if(product instanceof Error) return response.status(400).json(product.message)
        response.json(product)
    }

    async remove(request: Request, response: Response){
        const productRepo = new ProductRepository();
        await productRepo.remove(request.params.id)
        response.send()
    }

    async update(request: Request, response: Response){
        const { description, price } = request.body;

        const productRepo = new ProductRepository();
        const product = await productRepo.update(request.params.id,{
            description, price
        });
        
        response.json(product)
    }

}