class mySet {
  constructor() {
    this.values = [];
  }
  // has methode : check if the set has amready the value
  has(element) {
    if (this.values.indexOf(element) !== -1) {
      return true;
    }
    return false;
  }

  //values : return the values of the set
  setValues() {
    return this.values.map((element) => element);
  }

  //add : add an element to the set
  add(element) {
    if (this.has(element)) {
      return false;
    }
    this.values.push(element);
    return true;
  }

  //remove : remove an element from the set
  remove(element) {
    if (this.has(element)) {
      this.values = this.values.filter((item) => item != element);
      return this.values;
    }
    return false;
  }
}

const set = new mySet();
console.log(set.add(1));
console.log(set.add(2));
console.log(set.add(2));
console.log(set.add("yassine"));
console.log(set.setValues());
console.log(set.remove(1));
console.log("after");
console.log(set.setValues());
