class Node<Type> {
  public data: Type;
  public next: Node<Type> | null;

  public constructor(data: Type) {
    this.data = data;
    this.next = null;
  }
}

export class LinkedList<Type> {
  private _head: Node<Type> | null;
  private _tail: Node<Type> | null;
  private _length: number;

  public constructor() {
    this._head = null;
    this._tail = null;
    this._length = 0;
  }

  public add(data: Type): void {
    const node = new Node<Type>(data);
    if (this._head === null) {
      this._head = node;
      this._tail = node;
    } else {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      this._tail!.next = node;
      this._tail = node;
    }

    this._length++;
  }

  public get(index: number): Type | null {
    if (index < 0 || index >= this._length) {
      return null;
    }

    let current = this._head;
    let index_ = 0;

    while (index_ < index) {
      current = current?.next ?? null;
      index_++;
    }

    return current?.data ?? null;
  }

  public insertAt(index: number, data: Type): void {
    if (index === 0) {
      const node = new Node(data);
      node.next = this._head;
      this._head = node;
    } else if (index === this._length) {
      this.add(data);
      return;
    } else {
      let current = this._head;
      let previous = null;
      let index_ = 0;

      while (index_ < index) {
        previous = current;
        current = current?.next ?? null;
        index_++;
      }

      const node = new Node(data);
      node.next = current;
      if (previous !== null) {
        previous.next = node;
      }
    }

    this._length++;
  }

  public removeFrom(index: number): void {
    if (index === 0) {
      this._head = this._head?.next ?? null;
    } else {
      let current = this._head;
      let previous = null;
      let index_ = 0;

      while (index_ < index) {
        previous = current;
        current = current?.next ?? null;
        index_++;
      }

      if (previous !== null) {
        previous.next = current?.next ?? null;
      }
    }

    this._length--;
  }

  public printAll(): void {
    let current = this._head;
    while (current !== null) {
      console.info(current.data);
      current = current.next;
    }
  }

  public get head(): typeof this._head {
    return this._head;
  }
}
