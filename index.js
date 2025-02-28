class SortedList {
  constructor(items, length) {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort(function (a,b) {
      return a - b
    })

    this.length = this.items.length


  }

  get(pos) {
    if (pos > this.items.length) {
      throw new Error('OutofBounds')
    }
    else {
       return this.items[pos]
    }
  }

  max() {
    if (this.items.length === 0) {
      throw new Error ("EmptySortedList")
    }
    else {
      return this.items[this.items.length - 1]
    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error ("EmptySortedList")
    } else {
      return this.items[0]
    }
  }

  sum() {
    if (this.items.length === 0) {
      return 0;
    }
    else {
        return this.items.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    }
  }

  avg() {
    if(this.items.length === 0) {
      throw new Error ("Empty Sorted List")
    } else {
      return this.sum() / this.items.length
    }
  }
}

module.exports = SortedList;
