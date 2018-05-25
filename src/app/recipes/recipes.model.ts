import { Ingredient } from './../shared/ingredients.model';

export class recipe {            //how a recipe should look like
    public name: string;
    public description: string;
    public imagePath: string;
    // public videoPath: string;
    public ingredients: Ingredient[];

    constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[]) {
        this.name = name;
        this.description = desc;  
        this.imagePath = imagePath;
        // this.videoPath= imagePath;
        this.ingredients =  ingredients;
    }
}