export enum Gender {
  male,
  female,
  other,
}

export interface Mutant {
  id?: string;
  name: string;
  gender: Gender;
  age: number;
  status: boolean;
  accomplices: string;
  enemies: string;
}

// [
//   {
//     id: string;
//     name: string;
//     mutant_id: Mutant;
//   },
// ];
