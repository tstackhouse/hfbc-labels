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

    constructor(data:Object) {
        this.id = data['id'];
        this.name = data['name'];
        this.style = data['style'];
        this.batchCode = data['batchCode'];
        this.brewDate = data['brewDate'];
        this.packageDate = data['packageDate'];
        this.originalGravity = data['originalGravity'];
        this.finalGravity = data['finalGravity'];
        this.iBUs = data['iBUs'];
        this.yeastStrain = data['yeastStrain'];
    }

    get abv() {
        return (76.08 * (this.originalGravity - this.finalGravity) / (1.775 - this.originalGravity)) * (this.finalGravity / 0.794);
    }
}
