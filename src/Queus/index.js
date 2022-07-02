import { Queue } from "./queue";

let enqueuelist = new Queue()

enqueuelist.enqueue('abc')
enqueuelist.enqueue('cba')
enqueuelist.enqueue('nba')
enqueuelist.enqueue('nbl')
enqueuelist.dequeue()
console.log('enqueuelist',enqueuelist.items);
console.log('enqueuelist',enqueuelist.front());
console.log('enqueuelist',enqueuelist.isEmpty());
console.log('enqueuelist',enqueuelist.size());

