import { Gender } from '../interfaces/Marvel.interface';

export class CreateMutant {
  readonly name: string;
  readonly status: boolean;
  readonly gender: Gender;
  readonly age: number;
  readonly accomplices: string;
  readonly enemies: string;
}
