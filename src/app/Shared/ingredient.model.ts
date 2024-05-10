export class Ingredient{
    public name:string;
    public amount:number;
    constructor(name:string,amount:number){
        this.name=name;
        this.amount =amount;
    }
    /* ye or upr vala same hai 
    constructor ke arguments main public lgane ke baad
     ye upr vale code ke eqivalent ho jae ga
    constructor( public name:string,public amount:number){  
    }
    */
}