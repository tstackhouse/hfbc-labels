import {Component} from 'angular2/core';
import {Recipe} from './recipe';
import {RecipeService} from './recipe.service';

@Component({
    selector: 'bottle-label',
    templateUrl: 'static/partials/label.html',
    inputs: ['recipe']
})
export class LabelComponent {
    public recipe: Recipe;
}
