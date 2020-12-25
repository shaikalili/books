
import { bookSell } from '../shared/booksSell.model';

export class book {

    public name: string;
    public description: string;
    public imagePath: string;
    public price:string;
    public booksell:bookSell;

    constructor(name: string, desc: string, imagePath: string, price:string){
        this.name=name;
        this.description=desc;
        this.imagePath=imagePath;
        this.price=price;
    }
}