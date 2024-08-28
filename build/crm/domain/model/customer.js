"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    constructor(id, name, course) {
        this._id = id;
        this._name = name;
        this._course = course;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get course() {
        return this._course;
    }
}
exports.Customer = Customer;
