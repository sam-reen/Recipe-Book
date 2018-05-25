export class Ingredient {
      public name: string;
      public amount: number;
  
      constructor(name: string, amount: number){
          this.name = name;
          this.amount = amount;
      }
  }
  
  //constructor(public name: string, public amount: number)
  //and dont have to declare it above or in the constructor