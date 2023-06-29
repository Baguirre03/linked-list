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
}

class Node {
    constructor(value, next) {
        this.value = value
        this.next = null
    }
}

const list = new LinkedList('list')
list.append('Appended')
list.prepend('Prepended')
list.prepend('double prepended')
list.append('at the end!')
list.printList()
list.size()
