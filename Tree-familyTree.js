const prompt = require("prompt-sync")({ sigint: true });

class TreeNode {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addchild = (node) => {
    //can only add 2 ch per parent
    if (this.children.length < 2) {
      this.children.push(node);
      console.log(`${node.name} child of ${this.name}`);
    } else {
      console.log("child is an orphan");
    }
  };
  getchildwithname = () => {
    return this.find((child) => child.name === name);
  };

  traverse = () => {
    let nodes = [this];
    while (nodes.length > 0) {
      let current = nodes.pop();
      console.log(current.name);
      nodes = [...nodes, ...current.children];
    }
  };
}

const root = new TreeNode("Alkandery");
let fullName = prompt("Enter name of child ( type `done if you're finished: ");

while (fullName !== "done") {
  let current = root;

  let names = fullName.split(" ").reverse();
  console.log(names);
  let firstName = names.pop();
  let lastName = names.shift();

  if (lastName === current.name) {
    //adding child to tree
    if (names) {
      //deals with names in middels
      for (let name of names) {
        let child = current.getchildwithname(name);
        if (child) {
          current = child;
        } else {
          let newNode = new TreeNode(name);
          current.addchild(newNode);
          current = newNode;
        }
      }
    }
    let newNode = new TreeNode(firstName);
    current.addchild(newNode);
  }

  console.log("-------------------------");
  fullName = prompt("Enter name of child (type 'done` if you finish):");

  // break;
}
root.traverse();
