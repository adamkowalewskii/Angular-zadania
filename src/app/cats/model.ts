export interface Cat {
  name: string;
  ageMonths : number;
  breed: string;
  picUrl: Array<string>;
  vaccinated: boolean;
  funFact: String;
  isReserved: boolean;
}

export interface AdoptionData {
  catsName: string;
  personName: string;
  personPhone: string;
}

