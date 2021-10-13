export class Supplier{
  public id:number;
   public companyName:string;
   public contactName:string;
   public contactTitle:string;

   constructor(
       id:number,
       companyname:string,contactName:string,categoryID:number, contactTitle:string,){

        this.id=id;
        this.companyName=companyname;
        this.contactName=contactName;
        this.contactTitle=contactTitle;

   }
}
