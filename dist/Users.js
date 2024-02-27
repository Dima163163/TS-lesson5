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
        return this.userList.find(user => user.id === id) || null;
    }
    sorted(sortType = 'up') {
        if (sortType === 'up') {
            return this.userList.sort((a, b) => {
                if (a.firstname > b.firstname) {
                    return 1;
                }
                else if (a.firstname < b.firstname) {
                    return -1;
                }
                else {
                    return 0;
                }
            });
        }
        else {
            return this.userList.sort((a, b) => {
                if (a.firstname > b.firstname) {
                    return -1;
                }
                else if (a.firstname < b.firstname) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
        }
    }
}
exports.Users = Users;
