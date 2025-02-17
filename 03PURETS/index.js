// class  User{
//     email: string
//     name: string
//     readonly city : string = "Varanasi"
//     constructor(email: string, name: string){
//         this.email = email
//         this.name = name
//     }
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(email, name) {
        this.email = email;
        this.name = name;
        this._coursCount = 1;
        this.city = "Varanasi";
    }
    Object.defineProperty(User.prototype, "getCourseCount", {
        get: function () {
            return this._coursCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "setCourseCount", {
        set: function (value) {
            if (value <= 1) {
                throw new Error("invalid");
            }
            this._coursCount = value;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var SubUser = /** @class */ (function (_super) {
    __extends(SubUser, _super);
    function SubUser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isFamily = true;
        return _this;
    }
    SubUser.prototype.chanceCount = function () {
        this._coursCount = 4;
    };
    return SubUser;
}(User));
var Shivam = new User("a@a.com", "Ayush");
Shivam.city;
Shivam.email;
