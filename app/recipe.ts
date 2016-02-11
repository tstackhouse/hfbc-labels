export class Recipe {
  id: number;
  name: string;
  style: string;
  batchCode: number;
  brewDate: string;
  packageDate: string;
  originalGravity: number;
  finalGravity: number;
  iBUs: number;
  yeastStrain: string;

  // private abv() {
  //     return (76.08 * (this.originalGravity - this.finalGravity) / (1.775 - this.originalGravity)) * (this.finalGravity / 0.794);
  // }
}
