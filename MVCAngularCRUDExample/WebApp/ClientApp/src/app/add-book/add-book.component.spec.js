"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var add_book_component_1 = require("./add-book.component");
describe('AddBookComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [add_book_component_1.AddBookComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(add_book_component_1.AddBookComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
