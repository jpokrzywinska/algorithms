export class BinaryTree {

    constructor(array) {
        this.root = new Node(array[0]);
        for (var i = 1; i < array.length; i++) {
            this.assignNode(root, value);
        }
    }

    assignNode(node, value) {
        if (node.value > value) {
            if (node.left != null) {
                this.assignNode(node.left, value);
            } else {
                node.left = new Node(value);
            }
        } else {
            if (node.right != null) {
                this.assignNode(node.right, value);
            } else {
                node.right = new Node(value);
            }
        }
    }

    getLevel(value) {
        let currentNode = root;
        let level = 0;
        let found = false;
        while (!found) {
            if (currentNode.value === value) {
                return level;
            } else {
                currentNode = currentNode.value < value ? currentNode.right : currentNode.left;
                level++;
            }
        }
        return level;
    }
}

class Node {
    constructor(value) {
        this.value = value;
    }
}