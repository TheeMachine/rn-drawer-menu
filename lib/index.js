"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var DrawerMenu = (function (_super) {
    __extends(DrawerMenu, _super);
    function DrawerMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DrawerMenu.prototype.render = function () {
        return (<react_native_1.View>
                <react_native_1.Text style={{ color: 'red' }}>DrawerMenu </react_native_1.Text>
            </react_native_1.View>);
    };
    return DrawerMenu;
}(react_1.default.Component));
exports.default = DrawerMenu;
//# sourceMappingURL=index.js.map