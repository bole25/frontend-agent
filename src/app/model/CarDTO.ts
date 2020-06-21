export class CarDTO {
    id: number;
    carType: string;
    carModel: string;
    transmissionType: string;
    gasType : string;
    carClass : string;
    lowerPrice : number;
    upperPrice : number;
    kmAmount : number;
    kmPlanAmount : number;
    kidsSeats : number;
    cdw : Boolean;
    images: Array<string>;
    likes : number;
    dislikes : number;
    comments : Array<string>;
    startDate : Date;
    endDate : Date;
  }
