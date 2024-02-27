export interface User {
  id: number;
  firstname: string;
  surname: string;
  age: number;
}

export abstract class Users <T extends User> {
  userList: T[] = [];

  add(user: T): void {
    this.userList.push(user)
  }

  remove(id: number): boolean {
    const idUser: number = this.userList.findIndex(user => user.id == id);
    if (idUser >= 0) {
      this.userList.splice(idUser, 1);
      return true
    } else {
      return false
    }
  }

  get(id: number): T | null {
    return this.userList.find(user => user.id === id) || null;
  }

  sorted(sortType: string = 'up'): T[] {
    if (sortType === 'up') {
      return this.userList.sort((a: T, b: T): number => {
        if (a.firstname > b.firstname) {
          return 1
        } else if (a.firstname < b.firstname) {
          return -1
        } else {
          return 0
        }
      })
    } else {
      return this.userList.sort((a: T, b: T): number => {
        if (a.firstname > b.firstname) {
          return -1
        } else if (a.firstname < b.firstname) {
          return 1
        } else {
          return 0
        }
      })
    }
  }
}