//* 내장되어있는 Array 타입을 사용하지 않고 자료구조 Stack 구현하기 (Generic)

{
  interface IStack<T> {
    readonly size: number;
    push(vlaue: T): void;
    pop(): T;
    find(index: number): T;
  }

  type Node<T> = {
    readonly index: number;
    readonly value: T;
    readonly beforeNode?: Node<T>;
  };

  class Stack<T> implements IStack<T> {
    private head?: Node<T>;
    private _size: number;

    constructor(private capacity: number) {
      this._size = 0;
    }

    get size() {
      return this._size;
    }

    push(value: T): void {
      if (this.size === this.capacity) {
        throw new Error('Stack is Full!');
      }
      const node: Node<T> = {
        index: this.head ? this.head.index + 1 : 0,
        value,
        beforeNode: this.head,
      };
      this.head = node;
      this._size++;
    }

    pop(): T {
      if (!this.head) {
        throw new Error('Stack is Empty!');
      }
      const deletedNode = this.head;
      this.head = deletedNode.beforeNode;
      this._size--;
      return deletedNode.value;
    }

    find(index: number): T {
      if (!this.head) {
        throw new Error('Stack is Empty!');
      }
      if (index >= this._size) {
        throw new Error('Index is Over the Size of Stack!');
      }
      if (index < 0) {
        throw new Error('Index must Over the Zero');
      }
      if (index === this.head.index) {
        return this.head.value;
      } else {
        let findNode = this.head.beforeNode;
        while (findNode?.index !== index) {
          findNode = findNode?.beforeNode;
        }
        return findNode.value;
      }
    }
  }

  const stack1 = new Stack<string>(5);
  console.log(stack1);
  console.log(stack1.size);

  stack1.push('test1');
  stack1.push('test2');
  stack1.push('test3');
  console.log(stack1);
  console.log(stack1.size);

  const foundStr = stack1.find(0);
  console.log(foundStr);

  const poppedStr = stack1.pop();
  console.log(poppedStr);
  console.log(stack1);
  console.log(stack1.size);

  // -----------------------------------------------------

  const stack2 = new Stack<number>(5);
  console.log(stack2);
  console.log(stack2.size);

  stack2.push(111);
  stack2.push(222);
  stack2.push(333);
  console.log(stack2);
  console.log(stack2.size);

  const foundNum = stack2.find(0);
  console.log(foundNum);

  const poppedNum = stack2.pop();
  console.log(poppedNum);
  console.log(stack2);
  console.log(stack2.size);
}
