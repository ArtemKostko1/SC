class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  //ВСТАВКА
  add(data) {
    let newNode = new Node(data);
    //добавление корня
    if (this.root === null) {
      this.root = newNode;
    }
    //добавление узла
    else {
      this.addNode(this.root, newNode);
    }
  }

  //ВСТАВКА УЗЛА
  addNode(parentNode, newNode) {
    //вставка влево
    if (newNode.data < parentNode.data) {
      if (parentNode.left === null) {
        parentNode.left = newNode;
      }
      //рекурсивный случай
      else {
        this.addNode(parentNode.left, newNode);
      }
    }
    //вставка вправо
    else {
      if (newNode.data > parentNode.data) {
        if (parentNode.right === null) {
          parentNode.right = newNode;
        }
        //рекурсивный случай
        else {
          this.addNode(parentNode.right, newNode);
        }
      }
      //если такой элемент уже есть - игнорировать
      else {
        return null;
      }
    }
  }

  //НАХОЖДЕНИЕ МИНИМАЛЬНОГО ЭЛЕМЕНТА СПРАВА ОТ РОДИТЕЛЯ
  minNode(node) {
    if (node.left === null) return node;
    else return this.findMinNode(node.left);
  }

  //УДАЛЕНИЕ
  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  //УДАЛЕНИЕ УЗЛА
  removeNode(node, data) {
    if (node === null) {
      console.log(`Элемент ${data} не удалось удалить, его не существует`);
      return null;

      //переход к левому поддереву
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;

      //переход к правому поддереву
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      //удаление узла без потомков
      if (node.left === null && node.right === null) {
        node = null;
        console.log(`Удалён элемент ${data}`);
        return node;
      }

      //удаление узла с одним потомком
      if (node.left === null) {
        node = node.right;
        console.log(`Удалён элемент ${data}`);
        return node;
      } else if (node.right === null) {
        node = node.left;
        console.log(`Удалён элемент ${data}`);
        return node;
      }

      //удаление узла с двумя потомками
      let newNode = this.minNode(node.right);
      node.data = newNode.data;
      node.right = this.removeNode(node.right, newNode.data);
      console.log(`Удалён элемент ${data}`);
      return node;
    }
  }

  //ОБХОД LCR
  LCR(node) {
    if (node != null) {
      this.LCR(node.left);
      console.log(node.data);
      this.LCR(node.right);
    }
  }

  //ОБХОД RCL
  RCL(node) {
    if (node != null) {
      this.RCL(node.right);
      this.RCL(node.left);
      console.log(node.data);
    }
  }

  //ОБХОД CLR
  CLR(node) {
    if (node != null) {
      console.log(node.data);
      this.CLR(node.left);
      this.CLR(node.right);
    }
  }
}

//ГЕНЕРАТОР РАНДОМНЫХ ЧИСЕЛ
function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//СОЗДАНИЕ ДЕРЕВА
let tree = new Tree();

//for (let i = 0; i <= 10; i++) {
//  tree.add(random(0, 10));
//}

tree.add(3);
tree.add(10);
tree.add(0);
tree.add(2);
tree.add(4);
tree.add(5);
//tree.remove(15);

console.log("Слева напрво");
tree.LCR(tree.root);
console.log("Справа налево");
tree.RCL(tree.root);
console.log("Из центра");
tree.CLR(tree.root);

console.log(tree);
