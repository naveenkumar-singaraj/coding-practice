class Stack<T> {
    private items: T[] = [];

    // Add an item to the top of the stack
    push(item: T): void {
        this.items.push(item);
    }

    // Remove the top item and return it
    pop(): T | undefined {
        return this.items.pop();
    }

    // Return the top item without removing it
    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    // Check if the stack is empty
    isEmpty(): boolean {
        return this.items.length === 0;
    }

    // Return the size of the stack
    size(): number {
        return this.items.length;
    }
}

// Example usage:
const stack = new Stack<number>();
stack.push(10);
stack.push(20);
console.log(stack.peek()); // Output: 20
console.log(stack.pop());  // Output: 20
console.log(stack.size()); // Output: 1