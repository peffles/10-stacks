'use strict';

const Stack = require('../lib/stack');

describe('Testing methods on the Stack class', () => {
  test('constructor testing', () => {
    const testStack = new Stack();
    expect(testStack._storage.head).toBeNull();
  });

  test('should add a value to the end of the stack', () => {
    const testStack = new Stack();
    testStack.push(1);
    testStack.push(3);
    testStack.push(50);
    expect(testStack._storage.head.value).toEqual(1);
    expect(testStack._storage.head.next.value).toEqual(3);
    expect(testStack._storage.head.next.next.value).toEqual(50);
  });

  test('should return the value of the last node and remove the node from storage', () => {
    const testStack = new Stack();
    testStack.push(1);
    testStack.push(2);
    const node = testStack._storage.head.next.value;
    const poppedVal = testStack.pop();
    expect(poppedVal).toEqual(node);
    const node1 = testStack._storage.head.value;
    expect(testStack.pop()).toEqual(node1);
  });

  test('should return the value of the last node in storage', () => {
    const testStack = new Stack();
    testStack.push(1);
    testStack.push(2);
    expect(testStack._storage.head.value).toEqual(1);
    expect(testStack._storage.head.next.value).toEqual(2);
    const lastVal = testStack._storage.head.next.value;
    expect(testStack.peek()).toEqual(lastVal);
    testStack.pop();
    expect(testStack.peek()).toEqual(testStack._storage.head.value);
  });

  test('should check if the storage is empty by checking if head is null', () => {
    const testStack = new Stack();
    expect(testStack.isEmpty()).toEqual(true);
    testStack.push(1);
    expect(testStack.isEmpty()).toEqual(false);
  });
});
