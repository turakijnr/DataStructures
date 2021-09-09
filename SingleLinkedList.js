class Node {
    constructor(val) {
    this.val = val
        this.next = null
    }

}
class SingleLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val){
        let  newnode = new Node(val)
        if(!this.head){
            this.head = newnode
            this.tail = this.head
        }
        else {
            this.tail.next = newnode
            this.tail = newnode

        }
        this.length ++
        return this
    }
    pop(){
        if(this.length === 0) return undefined
       let current = this.head
        let newTail = current
        while (current.next){
            newTail = current
            current = current.next
        }
        this.tail =newTail
        this.tail.next = null
        this.length --
        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        return current


    }
    shift(){
        if(!this.head)return undefined
        let current = this.head
         this.head= current.next
        this.length --
        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        return current
    }
    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        }
        else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }
    get(index){
        if(index<0 || index >= this.length)return null
        let counter = 0
        let current = this.head
        while (index !== counter){
            current = current.next
            counter++

        }
        return  current
    }
    set(index,val){
        let foundIndex = this.get(index)
        if(foundIndex){
            foundIndex.val = val
            return true
        }
        else return  false

    }




}



var list = new SingleLinkedList()
list.push("hey")
console.log(list)
list.push("hi")
console.log(list)
list.push("bye")
console.log(list)
list.push("hello")
console.log(list)
list.push("there")
// console.log(list)
// //  list.pop()
// // console.log(list)
// // list.pop()
// // console.log(list)
// // list.pop()
// // console.log(list)
// //
// list.unshift('nuuman')
// console.log(list)

console.log(list.get(0))
console.log(list.set(7,'hi'))
console.log(list.get(0))