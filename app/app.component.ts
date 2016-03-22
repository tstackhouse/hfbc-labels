import {Component, OnInit} from 'angular2/core';
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
    private knownRecipes: Recipe[] = new Array();
    private selectedRecipe: Recipe;
    private _recipes: Recipe[] = new Array();
    
    public constructor(private _recipeService: RecipeService) { }

    private ngOnInit() {
        var _this = this;

        this.getRecipes().then(function() {
            _this.onSelect(_this.knownRecipes[0]);
        });
    }

    private onSelect(recipe) {
        this.selectedRecipe = recipe;
	this.populateLabels();
    }

    private getRecipes() {
        return this._recipeService.getRecipes().then(recipes => this.knownRecipes = recipes);
    }

    private getRecipe() {
        return this._recipeService.getRecipe().then(recipe => this.selectedRecipe = recipe);
    }

    private populateLabels() {
	this._recipes = new Array();
	for (var i = 0; i < 6; i++) {
            this._recipes.push(this.selectedRecipe);
        }
    }
}
