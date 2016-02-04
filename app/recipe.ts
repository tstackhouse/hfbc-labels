export interface Recipe {
  id: number;
  name: string;
  style: string;
  batchCode: number;
  brewDate: string;
  packageDate: string;
  originalGravity: number;
  finalGravity: number;
  abv: string;
  iBUs: number;
  yeastStrain: string;
}
