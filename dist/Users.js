"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
class Users {
    userList = [];
    add(user) {
        this.userList.push(user);
    }
    remove(id) {
        const idUser = this.userList.findIndex(user => user.id == id);
        if (idUser >= 0) {
            this.userList.splice(idUser, 1);
            return true;
        }
        else {
            return false;
        }
    }
    get(id) {
        return this.userList.find(user => user.id === id) ?? null;
    }
    sorted(sortType = 'up') {
        if (sortType === 'up') {
            return this.userList.sort((a, b) => a.firstname > b.firstname ? 1 : -1);
        }
        else {
            return this.userList.sort((a, b) => a.firstname > b.firstname ? -1 : 1);
        }
    }
}
exports.Users = Users;
