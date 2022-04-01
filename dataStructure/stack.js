class Stack{
  //initializing the values
constructor(){
  this.count =0;
 this.storage=[];
}
//the push function is for goal to add an item to the end of the stack
  push(item){
    this.storage[this.count]=item;
    this.count++;
    return item
  }
  //the size function is for goal to return the size of the stack
  size(){
    return this.count;
  }
  //the pop function is for goal to delete the last element of the stack
  pop(){
    if(this.count===0){
      return undefined
    }

    this.count--;
    const result=this.storage[this.count]
    delete this.storage[this.count]
    return result
  }
  //the peak funtion is for goal to return the last element of the stack
  peak(){
    return this.storage[this.count-1]
  }
}
let stack=new Stack()
console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.push(3));
console.log("size",stack.size());
console.log(stack.pop());
console.log("size",stack.size());
console.log(stack.peak());
