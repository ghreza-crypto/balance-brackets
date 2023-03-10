class Node {
  constructor() {
    this.element = 0;
    this.pointer = null;
  }
}
class Stack {
  constructor() {
    this.top = null;
  }
  push(number) {
    let temp = new Node();
    temp.element = number;
    temp.pointer = this.top;
    this.top = temp;
  }

  pop() {
    const item = this.top.element;
    this.top = this.top.pointer;
    return item;
  }
  isEmpty()
  {
       return this.top == null;
  }
}
function balancedBrackets(string) {
  const stack = new Stack();
    for(element of [...string]){
    let result='';
    if (element == '(' || element == '[' || element == '{') {
      stack.push(element);

    } else if (element == ')' || element == ']' || element == '}') {
      let temp = stack.pop();
      if (temp == '(' && element != ')') {
        return false;
      } else if (temp == '[' && element != ']') {
       return false;
    
      } else if (temp == '{' && element != '}') {
       return false;
      }
    }
  }
  if(stack.isEmpty()){
    return true;
  }else{
    return false;
  }

}

console.log(balancedBrackets('(hello)[world]'))
// => true

console.log(balancedBrackets('([)]'))
// => false

console.log(balancedBrackets('[({}{}{})([])]'))
// => true

module.exports = balancedBrackets
