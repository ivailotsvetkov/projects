"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var book_component_1 = require("./book/book.component");
var book_details_component_1 = require("./book-details/book-details.component");
var add_book_component_1 = require("./add-book/add-book.component");
var edit_book_component_1 = require("./edit-book/edit-book.component");
var appRoutes = [
    {
        path: 'details/:id',
        component: book_details_component_1.BookDetailsComponent,
        data: { title: 'Book Details' }
    },
    {
        path: '',
        component: book_component_1.BookComponent,
        data: { title: 'Book List' }
    },
    {
        path: 'books',
        component: book_component_1.BookComponent,
        data: { title: 'Book List' }
    },
    {
        path: 'create',
        component: add_book_component_1.AddBookComponent,
        data: { title: 'Add Book' }
    },
    {
        path: 'edit/:id',
        component: edit_book_component_1.EditBookComponent,
        data: { title: 'Edit Book' }
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                book_component_1.BookComponent,
                book_details_component_1.BookDetailsComponent,
                add_book_component_1.AddBookComponent,
                edit_book_component_1.EditBookComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                router_1.RouterModule.forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
