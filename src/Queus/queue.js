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