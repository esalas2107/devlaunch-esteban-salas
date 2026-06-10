/*

Given the root of a binary tree and an integer targetSum,
return true if the tree has a root-to-leaf path such that adding up all the values along the path
equals targetSum. A leaf is a node with no children.

*/

class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree<T> {
  root: TreeNode<T> | null;

  constructor() {
    this.root = null;
  }

  insert(value: T): void {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  private insertNode(node: TreeNode<T>, newNode: TreeNode<T>): void {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  search(value: T): boolean {
    return this.searchNode(this.root, value);
  }

  private searchNode(node: TreeNode<T> | null, value: T): boolean {
    if (node === null) {
      return false;
    }

    if (value < node.value) {
      return this.searchNode(node.left, value);
    } else if (value > node.value) {
      return this.searchNode(node.right, value);
    } else {
      return true;
    }
  }


  printTree(): void {
    if (this.root === null) {
      console.log("El árbol está vacío.");
      return;
    }

    const queue: (TreeNode<T> | null)[] = [this.root];
    while (queue.length > 0) {
      const levelSize = queue.length;
      let levelValues: string[] = [];

      for (let i = 0; i < levelSize; i++) {
        const node = queue.shift();
        if (node) {
          levelValues.push(String(node.value));
          queue.push(node.left);
          queue.push(node.right);
        } else {
          levelValues.push("null");
        }
      }
      console.log(levelValues.join(" "));
    }
  }

  rootToLeafPath(targetSum: number) {
    return this.rootToLeafPathSum(this.root, 0, targetSum);
  }

  rootToLeafPathSum(node: TreeNode<T> | null, totalSum: number, targetSum: number): boolean {
    if(node === null) {
        return false;
    } 

    totalSum += Number(node.value);

    if(!node.left && !node.right) {
        if(totalSum === targetSum) {
            return true;
        } else {
            return false;
        }
    } else {
        return this.rootToLeafPathSum(node.left, totalSum, targetSum) || this.rootToLeafPathSum(node.right, totalSum, targetSum);
    }
}
}


const tree = new BinaryTree<number>();

tree.insert(5);
tree.insert(4);
tree.insert(8);
tree.insert(11);
tree.insert(13);
tree.insert(4);
tree.insert(7);
tree.insert(2);
tree.insert(1);

tree.printTree();

console.log(tree.rootToLeafPath(22));
