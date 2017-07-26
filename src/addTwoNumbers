function ListNode(val){
    this.val = val;
    this.next = null;        
}

ListNode.prototype.getValSum = function(){
  var arr = [];
  var list = this;
  while(list!=null){
      arr.unshift(list.val);
      list = list.next;
  }
  return parseInt(arr.join(''));
}

function addTwoNumbers(l1,l2){
  var sum = l1.getValSum() + l2.getValSum();
  var ln = new ListNode(undefined), current = ln;
  while (sum >= 10) {    
    current.val = parseInt(sum % 10);
    current.next = new ListNode(undefined);
    console.log('current.val='+current.val);
    current = current.next;
    sum = parseInt(sum / 10);
  }
  current.val = sum;
  return ln;  
}
