import {Component} from 'angular2/core';
import {LabelComponent} from './label.component';
import {Recipe} from './recipe';
import {RecipeService} from './recipe.service';

@Component({
    selector: 'my-app',
    template: `<section *ngFor="#a of [1,2,3,4,5,6]">
            <bottle-label [recipe]="selectedRecipe"></bottle-label>
        </section>`,
    directives: [LabelComponent]
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
