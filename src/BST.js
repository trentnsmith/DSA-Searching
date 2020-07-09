class BinarySearchTree {
    constructor(key = null, value = null, parent = null) {
      this.key = key;
      this.value = value;
      this.parent = parent;
      this.left = null;
      this.right = null;
    }
  
    insert(key, value) {
      // If the tree is empty then this key being inserted is the root node of the tree
      if (this.key == null) {
        this.key = key;
        this.value = value;
      }
  
      /* If the tree already exists, then start at the root, 
         and compare it to the key you want to insert.
         If the new key is less than the node's key 
         then the new node needs to live in the left-hand branch */
      else if (key < this.key) {
        /* If the existing node does not have a left child, 
           meaning that if the `left` pointer is empty, 
           then we can just instantiate and insert the new node 
           as the left child of that node, passing `this` as the parent */
        if (this.left == null) {
          this.left = new BinarySearchTree(key, value, this);
        }
        /* If the node has an existing left child, 
           then we recursively call the `insert` method 
           so the node is added further down the tree */
        else {
          this.left.insert(key, value);
        }
      }
      // Similarly, if the new key is greater than the node's key 
      // then you do the same thing, but on the right - hand side * /
      else {
        if (this.right == null) {
          this.right = new BinarySearchTree(key, value, this);
        }
        else {
          this.right.insert(key, value);
        }
      }
    }
  
    find(key) {
      // If the item is found at the root then return that value
      if (this.key == key) {
        return this.value;
      }
      /* If the item you are looking for is less than the root 
         then follow the left child.
         If there is an existing left child, 
         then recursively check its left and/or right child
         until you find the item */
      else if (key < this.key && this.left) {
        return this.left.find(key);
      }
      /* If the item you are looking for is greater than the root 
         then follow the right child.
         If there is an existing right child, 
         then recursively check its left and/or right child
         until you find the item */
      else if (key > this.key && this.right) {
        return this.right.find(key);
      }
      // You have searched the tree and the item is not in the tree
      else {
        throw new Error('Key Error');
      }
    }
  
    remove(key) {
      if (this.key == key) {
        if (this.left && this.right) {
          const successor = this.right._findMin();
          this.key = successor.key;
          this.value = successor.value;
          successor.remove(successor.key);
        }
        /* If the node only has a left child, 
           then you replace the node with its left child */
        else if (this.left) {
          this._replaceWith(this.left);
        }
        /* And similarly if the node only has a right child 
           then you replace it with its right child */
        else if (this.right) {
          this._replaceWith(this.right);
        }
        /* If the node has no children then
           simply remove it and any references to it 
           by calling "this._replaceWith(null)" */
        else {
          this._replaceWith(null);
        }
      }
      else if (key < this.key && this.left) {
        this.left.remove(key);
      }
      else if (key > this.key && this.right) {
        this.right.remove(key);
      }
      else {
        throw new Error('Key Error');
      }
    }
  
    _replaceWith(node) {
      if (this.parent) {
        if (this == this.parent.left) {
          this.parent.left = node;
        }
        else if (this == this.parent.right) {
          this.parent.right = node;
        }
  
        if (node) {
          node.parent = this.parent;
        }
      }
      else {
        if (node) {
          this.key = node.key;
          this.value = node.value;
          this.left = node.left;
          this.right = node.right;
        }
        else {
          this.key = null;
          this.value = null;
          this.left = null;
          this.right = null;
        }
      }
    }
  
    _findMin() {
      if (!this.left) {
        return this;
      }
      return this.left._findMin();
    }
  
    bfs(values=[]){
      const queue = new Queue();
      queue.enqueue(this);
      while (queue.length){
        const node = queue.dequeue();
        values.push(node.value);
    
        if(node.left){
          queue.enqueue(node.left);
        }
        if(node.right){
          queue.enqueue(node.right);
        }
      }
      return values;
    }
  
  }
  
  function preOrder(BST){
    console.log(BST.key)
    if(BST.left){
      preOrder(BST.left)
    }
    if(BST.right){
      preOrder(BST.right)
    }
  }
  function inOrder(BST) {
    if (BST.left) {
      inOrder(BST.left)
    }
    console.log(BST.key)
    if (BST.right) {
      inOrder(BST.right)
    }
  }
  function postOrder(BST) {
    if (BST.left) {
      postOrder(BST.left)
    }
    if (BST.right) {
      postOrder(BST.right)
    }
    console.log(BST.key)
  }
  
  
  function main() {
    const BST = new BinarySearchTree();
    BST.insert(25, 25);
    BST.insert(15, 15);
    BST.insert(10, 10);
    BST.insert(4, 4);
    BST.insert(12, 12);
    BST.insert(24, 24);
    BST.insert(18, 18);
    BST.insert(22, 22);
    BST.insert(50, 50);
    BST.insert(35, 35);
    BST.insert(31, 31);
    BST.insert(44, 44);
    BST.insert(70, 70);
    BST.insert(66, 66);
    BST.insert(90, 90);
  }
  
  console.log(main())
    module.exports = BinarySearchTree;
  
  
  //           Captain Picard
  //           /               \
  //     Commander Riker       Commander Data
  //         /         \                \
  //     Lt. Cmdr.   Lt. Cmdr.          Lt. Cmdr.
  //      Worf        LaForge            Crusher
  //         /                           /
  // Lieutenant                  Lieutenant
  // security-officer            Selar
  
  // Output Captian picard, Commander Riker, Data, Worf, LaForge, Crusher, security-officer, Selar. 
  
  function officer(){
    const BST = new BinarySearchTree(5, 'Captain Picard');
  
    BST.insert(3, 'Commander Riker');
    BST.insert(6, 'Commander Data');
    BST.insert(2, 'Lt Cmdr Worf');
    BST.insert(4, 'Lt Cmdr Laforge');
    BST.insert(1, 'Lt security-officer');
    BST.insert(8, 'Lt Cmdr Crusher');
    BST.insert(7, 'Lt Selar');  
}
  
console.log(officer());
  
  function maxProfit(arr){
    let max = 0;
    for(let i = 0; i< arr.length; i++){
      for(let j = i+1; j< arr.length; j++){
        if(arr[j] - arr[i] > max){
          max = arr[j] - arr[i];
        }
      }
    }
    return max;
  }

  console.log(maxProfit([128, 97, 121, 123, 98, 97, 105]));