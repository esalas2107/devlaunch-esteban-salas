/*

You are given the heads of two sorted linked lists list1 and list2. 
Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.

Example 1: Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2: 
Input: list1 = [], list2 = []
Output: []

Example 3:
Input: list1 = [], list2 = [0]
Output: [0]

Constraints: 
The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.
*/

class ListNode<T> {
    public value: T;
    public next: ListNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

class SingleLinkedList<T> {
    public head: ListNode<T> | null;

    constructor() {
        this.head = null;
    }

    public addToTail(value: T) {
        let current = this.head;
        if (!current) {
            this.head = new ListNode(value);
            return;
        }
        while (current.next) {
            current = current?.next;
        }
        current.next = new ListNode(value);
    }

    public toString(): string {
        let current = this.head;
        let result = "";

        while (current) {
            result += `${current.value} -> `;
            current = current.next;
        }

        return result + "null";
    }
}

function mergedLinkedList<T>(firstLinkedSortedList: SingleLinkedList<T>, secondLinkedSortedList: SingleLinkedList<T>) {
    const mergedLinkedList = new SingleLinkedList();

    while (firstLinkedSortedList.head !== null || secondLinkedSortedList.head !== null) {
        let firstHead = firstLinkedSortedList.head;
        let secondHead = secondLinkedSortedList.head;

        if (firstLinkedSortedList.head && secondLinkedSortedList.head) {
            if (firstLinkedSortedList.head.value <= secondLinkedSortedList.head.value) {
                mergedLinkedList.addToTail(firstHead?.value);
                firstLinkedSortedList.head = firstLinkedSortedList.head.next;
            } else {
                mergedLinkedList.addToTail(secondHead?.value);
                secondLinkedSortedList.head = secondLinkedSortedList.head.next;
            }
        } else if (firstLinkedSortedList.head) {
            mergedLinkedList.addToTail(firstHead?.value);
            firstLinkedSortedList.head = firstLinkedSortedList.head.next;
        } else if (secondLinkedSortedList.head) {
            mergedLinkedList.addToTail(secondHead?.value);
            secondLinkedSortedList.head = secondLinkedSortedList.head.next;
        }
    }

    console.log(mergedLinkedList.toString());
    return mergedLinkedList.head?.value;
}

const linkedList1 = new SingleLinkedList();

linkedList1.addToTail(1);
linkedList1.addToTail(3);
linkedList1.addToTail(4);

console.log(linkedList1.toString());

const linkedList2 = new SingleLinkedList();

linkedList2.addToTail(1);
linkedList2.addToTail(2);
linkedList2.addToTail(4); 

// linkedList2.addToTail(0)

console.log(linkedList2.toString());

console.log(mergedLinkedList(linkedList1, linkedList2));
