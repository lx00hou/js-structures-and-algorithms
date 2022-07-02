// 队列 --> 先进先出 /  后进后出 

export  class Queue {
    constructor(){
        this.items = []
    }

    enqueue(element){   // 向队列尾 添加 一项
        this.items.push(element)
    }

    dequeue(){    // 移除队列的最前面 一项
        return this.items.shift()
    }

    front(){     // 返回队列的第一项   队列不做任何改变
        return this.items[0]
    }

    isEmpty(){  // 判断 队列中是否为空
        return this.items.length ? true : false
    }

    size(){   // 返回队列长度
        return this.items.length
    }

} 
/** 
 *  数据依次循环 当有数据下标+1 等于 num 时 则删除该数据 , 然后继续执行 直到 只剩下 最后一个元素
 */

export function passGame(nameList,num){
    //  1  创建队列 讲数据压入队列中
    const queue = new Queue();

    for(let i = 0 ; i < nameList.length ; i ++ ){
        queue.enqueue(nameList[i])
    }
    // 2 循环让玩家进入队列   无法确定循环次数 建议使用 while 循环
    while(queue.size() > 1){
        for (let j = 0 ; j < num - 1; j++) {
            // 将最前面的 元素 依次删除 并重新 添加 到队列最后
            queue.enqueue(queue.dequeue())
        }
        // 此时 num 对应的 元素 就在队列的  第一项
        queue.dequeue()
    }   

    return queue.front()    // 取出仅剩的 一个元素

}