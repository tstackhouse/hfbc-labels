import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
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
    selectedRecipe: Recipe;

    constructor(private _recipeService: RecipeService) { }

    ngOnInit() {
        this.getRecipe();
    }

    getRecipe() {
        this._recipeService.getRecipe().then(recipe => this.selectedRecipe = recipe);
    }
}
