export class Stack<Type> {
  private readonly _stack: Array<Type> = [];

  public push(value: Type): void {
    this._stack.push(value);
  }

  public pop(): Type | null {
    if (this.isEmpty()) {
      return null;
    }

    return this._stack.pop() as Type;
  }

  public peek(): Type | null {
    if (this.isEmpty()) {
      return null;
    }

    return this._stack[this._stack.length - 1];
  }

  public isEmpty(): boolean {
    return this._stack.length === 0;
  }
}
