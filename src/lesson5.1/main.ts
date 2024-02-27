import { Employees } from './Employees';
import { Students } from './Students';

const students = new Students();
const employees = new Employees();

const Andrew = {
  id: 345,
  firstname: 'Андрей',
  surname: 'Петров',
  age: 22,
  year: 5,
  specialty: 'Информационные технологии'
};

const Max = {
  id: 555,
  firstname: 'Максим',
  surname: 'Иванов',
  age: 18,
  year: 2,
  specialty: 'Защита компьютерных программ'
};

const Dima = {
  id: 444,
  firstname: 'Дмитрий',
  surname: 'Дмитриев',
  age: 34,
  year: 5,
  specialty: 'Разработка интерфейсов'
};

const Ivan = {
  id: 678,
  firstname: 'Иван',
  surname: 'Максимов',
  age: 24,
  year: 4,
  specialty: 'Гейм-дизайн'
};

const Alex = {
  id: 987,
  firstname: 'Алексей',
  surname: 'Алексеев',
  age: 18,
  year: 1,
  specialty: 'Системная аналитика'
};

students.add(Andrew);
students.add(Max);
students.add(Dima);
students.add(Ivan);
students.add(Alex);
console.log('students: ', students.userList);


const Mikle = {
  id: 568,
  firstname: 'Михаил',
  surname: 'Михайлов',
  age: 54,
  post: 'Программист'
};

const Tanya = {
  id: 767,
  firstname: 'Татьяна',
  surname: 'Татьянова',
  age: 23,
  post: 'Дизайнер'
};

const Stas = {
  id: 976,
  firstname: 'Стас',
  surname: 'Стасов',
  age: 66,
  post: 'Менеджер'
};

employees.add(Mikle);
employees.add(Tanya);
employees.add(Stas);
console.log('employees: ', employees.userList);
console.log(students.remove(678));
console.log(employees.remove(568));

console.log('studentsRemove: ', students.userList);
console.log('employeesRemove: ', employees.userList);
const student = students.get(987);
console.log('studentGET: ', student);
const employee = employees.get(767);
console.log('employeeGET: ', employee);
students.sorted();
employees.sorted('down')
console.log('Отсортированные студенты', students);
console.log('Отсортированные сотрудники', employees);