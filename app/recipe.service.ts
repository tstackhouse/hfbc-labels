import {RECIPES} from './mock-recipes';
import {Injectable} from 'angular2/core';
import {Recipe} from './recipe';

@Injectable()
export class RecipeService {
    getRecipe() {
        return Promise.resolve(new Recipe({
            id: 1,
            name: 'The Imperialist',
            style: 'English IPA',
            batchCode: 2,
            brewDate: '10 Jan 2016',
            packageDate: '10 Feb 2016',
            originalGravity: 1.074,
            finalGravity: 1.020,
            iBUs: 47,
            yeastStrain: 'Wyeast 1187 Ringwood Ale'
        }));
    }

    getRecipes() {
        var recipes: Recipe[] = new Array();

        RECIPES.forEach((rec) => {
            console.log(rec);
            recipes.push(new Recipe(rec));
        });

        return Promise.resolve(recipes);
    }
}
