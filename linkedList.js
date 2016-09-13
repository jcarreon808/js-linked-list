/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */


function linkedListGenerator(){
  var head = null;
  var tail = null;
  var linkedListModule = {};

  linkedListModule.getHead = function(){
    return head;
  };

  linkedListModule.getTail = function(){
   return tail;
  };

  linkedListModule.add = function (content){
    var newNode = {};
    newNode.value = content;
    newNode.next = null;
    if (head === null && tail === null){
      head = newNode;
      tail = newNode;
      return newNode;
    }
    if (tail.next === null){
      tail.next = newNode;
      tail = newNode;
      return newNode;
    }


  };

  linkedListModule.remove = function (index){
    var node = linkedListModule.get(index);
    if (head === null || node === false){//list is empty or nothing to remove, return false
      return false;
    }

    var beforeNode = linkedListModule.get(index - 1);
    var afterNode = linkedListModule.get (index + 1);

    if (index === 0 ){
      head = afterNode;
      if(afterNode === false){
        head = null;
        tail = null;
      }
    }

    if(node === tail){
      tail = beforeNode;
      beforeNode.next =null;
    }

    beforeNode.next = afterNode;
  };



  linkedListModule.get = function (index){
    var position = head;
    var i = 0;
    while (i < index && position.next !== null){
      position = position.next;
      i++;
    }
    if (i === index){
      return position;
    }else{
      return false;
    }

  };

  linkedListModule.insert = function (vals, index){

    var node = linkedListModule.get(index);
    var beforeNode = linkedListModule.get(index - 1);
    var insertedNode = {};
    insertedNode.value = vals;
    insertedNode.next = node;

    if (index === 0){
      head = insertedNode;
    }
    if (node === false){
      return false;
    }

    beforeNode.next = insertedNode;

  };

  return linkedListModule;


}
