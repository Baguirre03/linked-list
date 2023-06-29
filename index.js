class LinkedList {
    constructor(head) {
        this.head = new Node('start')
    }

    append(value) {
        let node = this.head
        while(node.next != null) {
            node = node.next
        }
        node.next = new Node(value)
        return node
    }   

    prepend(value) {
        let holder = this.head // Holds the rest of the list so can easily change head
        this.head = new Node(value)
        this.head.next = holder
        return this.head
    }

    size() {
        let counter = 0
        let node = this.head
        while(node) {
            counter++
            if (node.next === null) {
                console.log(counter)
                return counter
            }
            node = node.next
        }
    }

    printList() {
        let node = this.head
        while(node) {
            console.log(node.value)
            if(node.next === null) {
                return
            }
            node = node.next
        }
        return node
    }

    header() {
        return this.head
    }

    tail() {
        let node = this.head
        while(node) {
            if(node.next === null) {
                return node
            }
            node = node.next
        }
        return
    }

    at(index) {
        let counter = 0
        let node = this.head
        while(node) {
            counter++
            if(counter === index) {
                return node
            }
            if(node.next === null) {
                return 'Size bigger than list'
            }
            node = node.next
        }
    }

    pop() {
        let node = this.head
        let counter = 0
        while(node.next != null) {
            counter++
            node = node.next
        }
        node = this.at(counter)
        node.next = null
    }
}

class Node {
    constructor(value, next) {
        this.value = value
        this.next = null
    }
}

const list = new LinkedList() // "start" at index 3
list.append('Appended') // index 4
list.prepend('Prepended') //index 2
list.prepend('double prepended') //index 1
list.append('at the end!') //index 5
list.printList()
// list.size()
// console.log(list.at(6))
list.pop()
list.pop()
