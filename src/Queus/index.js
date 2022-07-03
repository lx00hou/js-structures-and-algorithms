import { Queue , PriorityQueue , passGame  } from "./queue";

// let enqueuelist = new Queue()

// enqueuelist.enqueue('abc')
// enqueuelist.enqueue('cba')
// enqueuelist.enqueue('nba')
// enqueuelist.enqueue('nbl')
// enqueuelist.dequeue()
// console.log('enqueuelist',enqueuelist.items);
// console.log('enqueuelist',enqueuelist.front());
// console.log('enqueuelist',enqueuelist.isEmpty());
// console.log('enqueuelist',enqueuelist.size());

// console.log(passGame(['why','tom','lilie','lucy'],3));

const queueList = new PriorityQueue();
queueList.enqueue('eee',50);
queueList.enqueue('aaa',100);
queueList.enqueue('bbb',150);
queueList.enqueue('ccc',90);
queueList.enqueue('ddd',10);

console.log(queueList.items);