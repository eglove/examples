export class Queue<Type> {
  private readonly _queue: Type[];

  public constructor() {
    this._queue = [];
  }

  public enqueue(item: Type): void {
    this._queue.push(item);
  }

  public dequeue(): Type | undefined {
    return this._queue.shift();
  }

  public peek(): Type {
    return this._queue[0];
  }

  public getLength(): number {
    return this._queue.length;
  }

  public isEmpty(): boolean {
    return this.getLength() === 0;
  }
}
