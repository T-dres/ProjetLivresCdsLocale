
export class Book {
    name: string;
    author: string;
    etatEmprunt: boolean;
    etatRendu: boolean;
    description: string[];


    constructor(name: string){
        this.etatEmprunt = false;
        this.etatRendu = false;
    }

}