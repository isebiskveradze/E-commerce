import { SanityChecks } from '@angular/material/core';

export class  ProductPreviewModel {
    id: any;
    title: string;
    model: string;
    price: number;
    description: string;
    constructor(id:any, title:string, model:string, price:number, description:string){
        this.id = id,
        this.title = title,
        this.model = model,
        this.price = price,
        this.description = description


    }
    
}