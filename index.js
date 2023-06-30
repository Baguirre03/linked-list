class LinkedList {
    constructor(head) {
        this.head = null
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
        if(this.head === null) {
            return 0
        }
        let node = this.head
        let counter = 0
        while(node) {
            counter++
            if (node.next === null) {
                return counter
            }
            node = node.next
        }
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
            if(counter === index) {
                return node
            }
            counter++
            node = node.next
        }
        return false
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
        let stringList = `(${node.value}) -> `
        while(node) {
            node = node.next
            stringList += `(${node.value}) -> `
            if(node.next === null) {
                return stringList + ' Null'
            }
        }
        return stringlist
    }

    insertAt(value, index) {
        index--
        if(this.at(index) == false) {
            return 'not possible'
        }
        let beforeNode = this.at(index)
        let afterNode = beforeNode.next
        let createdNode = new Node(value)

        beforeNode.next = createdNode
        createdNode.next = afterNode
    }
}

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

const list = new LinkedList()
list.prepend('one') //index 1 //starting point
list.prepend('zero') //index 0

list.append('two') // index 2
list.append('three') //index 3

list.pop() // takes out index 3
list.size() // gives you size of list (at this point 4)

list.at(6) //size is bigger than list
list.at(2) // node {value = "2"} (finds node at certain index)

list.contains('notThere')// false
list.contains('1') //true

list.find('four')//prints out index of list(4)

list.insertAt('inserting this at 2', 2) //inserts this at 2
list.insertAt('cannot insert this', 10) //returns "not posisble"

console.log(list.toString()) //(zero) -> (one) -> (inserting this at 2) -> (two) -> null

