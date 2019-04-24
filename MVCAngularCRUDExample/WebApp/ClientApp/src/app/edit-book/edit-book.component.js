"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var EditBookComponent = /** @class */ (function () {
    function EditBookComponent(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.book = {};
    }
    EditBookComponent.prototype.ngOnInit = function () {
        this.getBookDetail(this.route.snapshot.params['id']);
    };
    EditBookComponent.prototype.getBookDetail = function (id) {
        var _this = this;
        this.http.get('/api/books/' + id).subscribe(function (data) {
            _this.book = data;
        });
    };
    EditBookComponent.prototype.updateBook = function (id) {
        var _this = this;
        this.http.put('/api/books/' + id, this.book)
            .subscribe(function (res) {
            var id = res['Id'];
            _this.router.navigate(['/details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    EditBookComponent.prototype.deleteBook = function (id) {
        var _this = this;
        this.http["delete"]('/api/books/' + id)
            .subscribe(function (res) {
            _this.router.navigate(['/books']);
        }, function (err) {
            console.log(err);
        });
    };
    EditBookComponent = __decorate([
        core_1.Component({
            selector: 'app-edit-book',
            templateUrl: './edit-book.component.html',
            styleUrls: ['./edit-book.component.css'],
            encapsulation: core_1.ViewEncapsulation.None
        })
    ], EditBookComponent);
    return EditBookComponent;
}());
exports.EditBookComponent = EditBookComponent;
