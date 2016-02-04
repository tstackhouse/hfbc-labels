System.register(['angular2/core', './label.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, label_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (label_component_1_1) {
                label_component_1 = label_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.selectedRecipe = {
                        id: 1,
                        name: 'The I(mperialist)PA',
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
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "<section *ngFor=\"#a of [1,2,3,4,5,6]\">\n            <bottle-label [recipe]=\"selectedRecipe\"></bottle-label>\n        </section>",
                        directives: [label_component_1.LabelComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map