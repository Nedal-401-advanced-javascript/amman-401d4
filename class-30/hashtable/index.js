'use strict';

class HashTable {
    constructor(size) {
        this.size = size;
        this.entries = new Array(size); // bucket
    }

    hash(key) {
        // return hash Index
        let charArr = key.split('');
        return charArr.reduce((p, n )=> {
            return p + n.charCodeAt(0);
        }, 0) * 599 % this.size;
    }

    add(key, value) {
        // Linked List to represent the value for each key in the bucket
        let hashIndex = this.hash(key);
        console.log("hashIndex: ",hashIndex)
        if(!this.entries[hashIndex]) {
            // create a new one
            this.entries[hashIndex] = new LinkedList();
        }

        let entry = { [key]: value };
        this.entries[hashIndex].append(entry); // LinkedList append method
    }

    get(key) {
        let hashIndex = this.hash(key);
        return this.entries[hashIndex].value
    }

    contains() {

    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    
    print() {

    }

    append(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            
        } else {
           
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }
    getValue(k) {
        let arr = [];
        let i = 0;
        let current = this.head;
        while (current.next) {
            arr[i] = current.value;
            current = current.next;
            i++;
        }
        let valueIndex = arr.length - k
        return arr[valueIndex]

    } 
}

// example
let myHash = new HashTable(1024);
myHash.add('Laith', 123);
myHash.add('Yahya', 'ABu Khalil');
myHash.add('Shela', 'Ahmad Shela');
myHash.add('Shela', 'Ahmad Shela222');

console.log(myHash);
console.log("-----------------------");
console.log(myHash.entries[318]);
console.log("-----------------------");

// console.log(myHash.entries[395]);
// console.log(myHash.entries[395].head.value);
// console.log(myHash.entries[395].head.next);
// console.log(myHash.entries[395].head.next.value);
