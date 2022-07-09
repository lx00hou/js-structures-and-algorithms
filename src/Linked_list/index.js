import {Linkedlist} from './linked_list';

const linkedList = new Linkedlist()

linkedList.append('aaa');
linkedList.append('bbb');
linkedList.append('ccc');
linkedList.append('ddd');
linkedList.append('eee');

linkedList.insert(1,'abc')
linkedList.insert(3,'cbd')

console.log('linkedList',linkedList);

