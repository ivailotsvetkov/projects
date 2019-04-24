"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var edit_book_component_1 = require("./edit-book.component");
describe('EditBookComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [edit_book_component_1.EditBookComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(edit_book_component_1.EditBookComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
