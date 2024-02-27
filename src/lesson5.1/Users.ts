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
    return this.userList.find(user => user.id === id) ?? null;
  }

  sorted(sortType: string = 'up'): T[] {
    if (sortType === 'up') {
      return this.userList.sort((a: T, b: T): number => 
        a.firstname > b.firstname ? 1 : -1
      )
    } else {
      return this.userList.sort((a: T, b: T): number => 
        a.firstname > b.firstname ? -1 : 1
      )
    }
  }
}