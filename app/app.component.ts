import {Component} from 'angular2/core';
import {LabelComponent} from './label.component';
import {Recipe} from './recipe';
import {RecipeService} from './recipe.service';

@Component({
    selector: 'my-app',
    templateUrl: 'static/partials/app.html',
    directives: [LabelComponent],
    providers: [RecipeService]
})
export class AppComponent {
    public selectedRecipe: Recipe = {
        id: 1,
        name: 'The Imperialist',
        style: 'English IPA',
        batchCode: 2,
        brewDate: '10 Jan 2016',
        packageDate: '3 Feb 2016',
        originalGravity: 1.074,
        finalGravity: 1.017,
        abv: '7.48%',
        iBUs: 47,
        yeastStrain: 'Wyeast 1187 Ringwood Ale'
    };
}
