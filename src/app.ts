import Log from '../utils/Log';
import SingleResponsibility from './single-responsibility/Single-Responsibility';
import Segregation from './interface-segregation-principle/Segregation';
import Segregation2 from './interface-segregation-principle/Segregation2';
import DependecyInVersion from './dependence-Inversion-Principle/DependecyInversion';
import DependecyInVersion2 from './dependence-Inversion-Principle/DependecyInversion2';
import DependecyInVersion3 from './dependence-Inversion-Principle/DependecyInversion3';
import Liskov from './liskov/Liskov';
import Liskov2 from './liskov/Liskov2';
import OCP from './ocp/OCP';
import OCP2 from './ocp/OCP2';
const log = new Log()
function add(a: number, b: number): number {
  return a + b
}
let sum = add(3, 2)
log.show(sum, '测试number类型')
function userInfo(name: string): string;
function userInfo(age: number): number;
function userInfo(info: any): any {
  if (typeof info === 'string') {
    return `my name is ${info}`
  } else {
    return `my age is ${info}`
  }
}
log.show(userInfo('wmw'), '函数重载')
log.show(userInfo(18)) //  my age is 18

// SingleResponsibility.main()
// Segregation.main()
// Segregation2.main()
// DependecyInVersion.main()
// DependecyInVersion2.main()
// DependecyInVersion3.main()
// Liskov.main()
// Liskov2.main()
// OCP.main()
OCP2.main()
