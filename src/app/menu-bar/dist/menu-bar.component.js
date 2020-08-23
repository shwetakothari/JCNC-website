"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MenuBarComponent = void 0;
var core_1 = require("@angular/core");
var menu_1 = require("./menu");
var MenuBarComponent = /** @class */ (function () {
    function MenuBarComponent(ren) {
        this.ren = ren;
        this.enteredButton = false;
        this.isMatMenuOpen = false;
        this.isMatMenu2Open = false;
        this.modulesList = menu_1.ModulesList;
    }
    MenuBarComponent.prototype.menuenter = function () {
        this.isMatMenuOpen = true;
        if (this.isMatMenu2Open) {
            this.isMatMenu2Open = false;
        }
    };
    MenuBarComponent.prototype.menuLeave = function (trigger, button) {
        var _this = this;
        setTimeout(function () {
            if (!_this.isMatMenu2Open && !_this.enteredButton) {
                _this.isMatMenuOpen = false;
                trigger.closeMenu();
                _this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-focused');
                _this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-program-focused');
            }
            else {
                _this.isMatMenuOpen = false;
            }
        }, 80);
    };
    MenuBarComponent.prototype.menu2enter = function () {
        this.isMatMenu2Open = true;
    };
    MenuBarComponent.prototype.menu2Leave = function (trigger1, trigger2, button) {
        var _this = this;
        setTimeout(function () {
            if (_this.isMatMenu2Open) {
                trigger1.closeMenu();
                _this.isMatMenuOpen = false;
                _this.isMatMenu2Open = false;
                _this.enteredButton = false;
                _this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-focused');
                _this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-program-focused');
            }
            else {
                _this.isMatMenu2Open = false;
                trigger2.closeMenu();
            }
        }, 100);
    };
    MenuBarComponent.prototype.buttonEnter = function (trigger) {
        var _this = this;
        setTimeout(function () {
            if (_this.prevButtonTrigger && _this.prevButtonTrigger != trigger) {
                _this.prevButtonTrigger.closeMenu();
                _this.prevButtonTrigger = trigger;
                _this.isMatMenuOpen = false;
                _this.isMatMenu2Open = false;
                trigger.openMenu();
                _this.ren.removeClass(trigger.menu.items.first['_elementRef'].nativeElement, 'cdk-focused');
                _this.ren.removeClass(trigger.menu.items.first['_elementRef'].nativeElement, 'cdk-program-focused');
            }
            else if (!_this.isMatMenuOpen) {
                _this.enteredButton = true;
                _this.prevButtonTrigger = trigger;
                trigger.openMenu();
                _this.ren.removeClass(trigger.menu.items.first['_elementRef'].nativeElement, 'cdk-focused');
                _this.ren.removeClass(trigger.menu.items.first['_elementRef'].nativeElement, 'cdk-program-focused');
            }
            else {
                _this.enteredButton = true;
                _this.prevButtonTrigger = trigger;
            }
        });
    };
    MenuBarComponent.prototype.buttonLeave = function (trigger, button) {
        var _this = this;
        setTimeout(function () {
            if (_this.enteredButton && !_this.isMatMenuOpen) {
                trigger.closeMenu();
                _this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-focused');
                _this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-program-focused');
            }
            if (!_this.isMatMenuOpen) {
                trigger.closeMenu();
                _this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-focused');
                _this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-program-focused');
            }
            else {
                _this.enteredButton = false;
            }
        }, 100);
    };
    MenuBarComponent = __decorate([
        core_1.Component({
            selector: 'app-menu-bar',
            templateUrl: './menu-bar.component.html',
            styleUrls: ['./menu-bar.component.scss']
        })
    ], MenuBarComponent);
    return MenuBarComponent;
}());
exports.MenuBarComponent = MenuBarComponent;
