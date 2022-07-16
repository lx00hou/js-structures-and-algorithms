class Node{
    constructor(element){
        // 保存传入的元素
        this.element = element;
        //  指向下一个节点 默认为null
        this.next = null;
    }
}


export class Linkedlist {
    constructor(){
        this.head = null; // 头部默认是 null 后续赋值
        this.length = 0;
    }
//  实现 append 元素插入
    append(ele){
      let newNode = new Node(ele);

      if(!this.head){   // 当链表头部为空时,代表链表中此时无数据  直接向 head 插入元素
        this.head = newNode
      }else {
        let current = this.head;
        while (current.next){   // next有值 就一直循环并重新赋值 current, 直到 next 为null 时 才找到链表最后一个元素
          current = current.next
        }
        current.next = newNode    // 跳出循环 代表 current下的 next 时null,找到了最后一个元素,进行赋值
      }

      this.length++;
    }

// 实现 元素的 插入 (默认从0开始 第一个元素 的位置是 0)
  insert(position,ele){
      let newNode = new Node(ele);

      if(position < 0 || position> this.length) {
        return console.error('插入失败')
      }
      if(position == 0){   // 如果位置是 0 代表 插入到最前面
        newNode.next = this.head;   // newNode.next 指向 head 当前指向的元素
        this.head = newNode;    // 将 head 指向更新为 当前插入的元素
      }else {
        let index = 0;
        let current = this.head;
        let previous = null;
        while (index ++ < position){
          previous = current;   // 记录 当前元素对的的上一个元素
          current = current.next;  // 重新赋值
        }

        previous.next = newNode;   // 将原本该位置元素的 上一个元素 指向 新元素
        newNode.next = current;    // 将新元素 指向 原本该位置上的元素

      }
      this.length++
  }


  get(position){    // 传入 位置  获得链表中 对应位置的 元素
    if(position < 0 || position > this.length -1) return null

    let index = 0;
    let current = this.head;
    while(index ++ < position){
      current = current.next   // 顺序查找
    }
    console.log(current.element);
    return current.element   //返回  指定位置 元素
  }

  indexOf(element){   // 传入元素 获得 对应链表中的 元素 所在位置
    let current = this.head;
    let index = 0 ;
     
    while(current){
      if(current.element === element){
        return index
      }
      index ++ ;
      current = current.next
    }

    return -1

  }

  update(index){   // 传入下标值  更新某个位置的元素
    if(index < 0 || index > this.length) return null
  }


}
