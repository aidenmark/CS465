export interface Trip {
    _id: string, // Internal primary key in MongoDB
    code: string;
    name: string;
    length: string;
    start: string;
    resort: string;
    perPerson: number;
    image: string;
    description: string;
  }