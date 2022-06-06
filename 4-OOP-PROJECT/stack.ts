//* 내장되어있는 Array 타입을 사용하지 않고 자료구조 Stack 구현하기

{
  interface IStack {
    readonly size: number;
    push(vlaue: string): void;
    pop(): string;
  }

  type Node = {
    readonly index: number;
    readonly value: string;
    readonly beforeNode?: Node;
  };

  class Stack implements IStack {
    private head?: Node;
    private _size: number;

    constructor(private capacity: number) {
      this._size = 0;
    }

    get size() {
      return this._size;
    }

    push(value: string): void {
      if (this.size === this.capacity) {
        throw new Error('Stack is Full!');
      }
      const node: Node = {
        index: this.head ? this.head.index + 1 : 0,
        value,
        beforeNode: this.head,
      };
      this.head = node;
      this._size++;
    }

    pop(): string {
      if (!this.head) {
        throw new Error('Stack is Empty!');
      }
      const deletedNode = this.head;
      this.head = deletedNode.beforeNode;
      this._size--;
      return deletedNode.value;
    }
  }

  const stack = new Stack(5);
  console.log(stack);
  console.log(stack.size);

  stack.push('test1');
  stack.push('test2');
  stack.push('test3');
  console.log(stack);
  console.log(stack.size);

  const popped = stack.pop();
  console.log(popped);
  console.log(stack);
  console.log(stack.size);
}
