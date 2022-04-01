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
  values() {
    return this.values;
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
      let index = this.values.indexOf(element);
      this.values.splice(index, 1);
    }
    return false;
  }
  //size : return the size of the set
  size() {
    return this.values.length;
  }
  //union : return the union if two sets
  union(newSet) {
    const union = new mySet();
    this.values.forEach(function (element) {
      union.add(element);
    });

    newSet.values.forEach(function (element) {
      union.add(element);
    });

    return union;
  }
  //intersection : this method returns the intersection of two sets

  intersection(newSet) {
    const intersection = new mySet();
    this.values.forEach(function (element) {
      if (newSet.has(element)) {
        intersection.add(element);
      }
    });
    return intersection;
  }
}

const set = new mySet();
const newset = new mySet();
console.log(set.add(1));
console.log(set.add(2));
console.log(set.add(2));
console.log(newset.add(1));
console.log(newset.add(2));
console.log(newset.add(3));
console.log(set.add("yassine"));
console.log(set.setValues());
console.log(set.remove(1));
console.log("after");
console.log(set.setValues());
console.log("union", set.union(newset));
console.log("intersec", set.intersection(newset));
