import type { LinkedList, Node } from '../linked-list';

export function findMiddle<Type>(list: LinkedList<Type>): Type | null {
  const middle = Math.ceil((list.length - 1) / 2);

  return list.get(middle);
}

export function findMiddleFastSlowPointer<Type>(
  list: LinkedList<Type>,
): Type | null {
  let slow = list.head;
  let fast = list.head;
  let previous: Node<Type> | null = null;

  while (fast?.next) {
    fast = fast.next.next;
    previous = slow;
    slow = slow?.next ?? null;
  }

  if (fast === null) {
    return previous?.next?.data ?? null;
  }

  return slow?.data ?? null;
}
