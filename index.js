class LinkedList {
    constructor(head) {
        this.head = new Node(head)
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
            node = node.next
        }
        return 'Size bigger than list'
    }

    pop() {
        let node = this.head
        while(node.next.next != null) {
            node = node.next
        }
        node.next = null
    }

    contains(value) {
        let node = this.head
        while(node) {
            if(node.value === value) {
                return true
            }
            node = node.next
        }
        return false
    }

    find(value) {
        let node = this.head
        let index = 1
        while(node) {
            if(node === null) {
                return null
            }
            if(node.value === value) {
                return index
            }
            index++
            node = node.next
        }
    }

    toString() {
        let node = this.head
        while(node) {
            console.log(node.value.toString())
            node = node.next
        }
    }
}

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

const list = new LinkedList('start') // "start" at index 3
list.prepend('2') //index 2
list.prepend('1') //index 1
list.append('4') // index 4
list.append('5') //index 5
// list.pop() // takes out 5
// list.printList()
// list.size()
// console.log(list.at(6)) //size is bigger than list
// console.log(list.at(2)) // node {value = "2"}
// console.log(list.contains('6')) // false
// console.log(list.contains('1')) //true
// console.log(list.find('4'))
list.toString()