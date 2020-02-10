import Log from './index';
let log = new Log()
function add(a: number, b: number): number {
  return a + b
}
let sum = add(1, 2)
log.inHTML(sum)
