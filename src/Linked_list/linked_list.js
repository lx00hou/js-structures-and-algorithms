class Node{
    constructor(element){
        // 保存元素
        this.element = element;
        //  指向下一个节点
        this.next = null;
    }
}


export class Linkedlist {
    constructor(){
        this.head = null; // 头部默认是 null 后续赋值
        this.length = 0;
    }

}