import { Request, Response } from 'express';
export declare class ProductController {
    create(): string;
    getDocs(version: any): {
        url: string;
    };
    findAll(request: Request, response: Response, query: any): any;
    findByPattern(): string;
    findById(params: any): string;
    update(): string;
    delete(): string;
}
