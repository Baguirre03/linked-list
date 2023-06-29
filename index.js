class LinkedList {
    constructor(node) {
        this.node = new Node('start')
    }

    append(value) {
        let node = this.node
        while(node.next != null) {
            node = node.next
        }
        node.next = new Node(value)
    }   
}

class Node {
    constructor(value, next) {
        this.value = value
        this.next = null
    }
}

const list = new LinkedList('list')
list.append('two')
list.append('third')
list.append('four')
console.log(list)
