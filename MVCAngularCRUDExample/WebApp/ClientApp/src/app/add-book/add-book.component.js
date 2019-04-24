"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var AddBookComponent = /** @class */ (function () {
    function AddBookComponent(http, router) {
        this.http = http;
        this.router = router;
        this.book = {};
    }
    AddBookComponent.prototype.ngOnInit = function () {
    };
    AddBookComponent.prototype.createBook = function () {
        var _this = this;
        this.http.post('/api/books', this.book)
            .subscribe(function (res) {
            var id = res['Id'];
            _this.router.navigate(['/details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    AddBookComponent = __decorate([
        core_1.Component({
            selector: 'app-add-book',
            templateUrl: './add-book.component.html',
            styleUrls: ['./add-book.component.css'],
            encapsulation: core_1.ViewEncapsulation.None
        })
    ], AddBookComponent);
    return AddBookComponent;
}());
exports.AddBookComponent = AddBookComponent;
