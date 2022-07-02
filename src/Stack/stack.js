// 栈 --> 后进先出 / 先进后出


export class Stack{
    constructor(){
        this.items = []
    }

    myPush(ele){   // 添加一个新元素到栈顶位置
        this.items.push(ele)
    }

    myPop(){  // 移除栈顶元素 
        this.items.pop();
    }

    myPeek(){  // 返回栈顶元素 同时不对栈做任何修改(仅仅返回)
        return this.items[this.items.length - 1]
    }
    isEmpty(){  // 判断 栈是否有元素 
        return !this.items.length ? true : false
    }
    size(){
        return this.items.length
    }

}


export function system(num){    // 传入十进制 返回二进制 
    let stack = new Stack()

    // 循环 (不能确定 循环次数时  推荐使用 while() )
    while(num > 0){
        let remainder = num % 2;
        num = Math.floor(num / 2);
        stack.myPush(remainder)
    } 

    return stack.items.reverse().join('')
}
