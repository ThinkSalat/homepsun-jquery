class DOMNodeCollection {
  constructor(array) {
    this.array = array;
  }
}

DOMNodeCollection.prototype.html = function(str) {
  if (str !== undefined) {
    this.forEach( (el) => {
      el.innerHTML = str;
    });
  } else {
    return this.array[0].innerHTML;
  }
};

DOMNodeCollection.prototype.empty = function () {
  this.html("");
};

DOMNodeCollection.prototype.append = function (input) {
    this.forEach(el => el.innerHTML += input);
};

DOMNodeCollection.prototype.addClass = function (newClass) {
  this.forEach( el => el.classList.add(newClass));
};

DOMNodeCollection.prototype.removeClass = function (oldClass) {
  this.forEach( el => el.classList.remove(oldClass));
};

DOMNodeCollection.prototype.attr = function (attrName, attrValue) {
  this.forEach( el => el.setAttribute(attrName, attrValue));
};

DOMNodeCollection.prototype.children = function () {
  let children = [];
  this.forEach( el => {
    let childs = Array.from(el.children);
    children = children.concat(childs);
  });
  return new DOMNodeCollection(children);
};

DOMNodeCollection.prototype.parent = function () {
  let parents = [];
  this.forEach( el => {
    let parent = el.parentNode;
    if (!parents.includes(parent)) parents.push(parent);
  });
  return new DOMNodeCollection(parents);
};

DOMNodeCollection.prototype.find = function (selector) {
  let results = [];
  this.forEach( (el) => {
    let filtered = Array.from(el.querySelectorAll(selector));
    filtered = filtered.filter(node => !results.includes(node));
    results = results.concat(filtered);
  });
  return results;
};

DOMNodeCollection.prototype.remove = function () {
  this.forEach( el => el.remove());
};


DOMNodeCollection.prototype.forEach = function (callback) {
  this.array.forEach(el=> callback(el));
};

DOMNodeCollection.prototype.on = function (eventtype, callback) {
  this.forEach( el => {
    el[`my${eventtype}`] = el[`my${eventtype}`] || [];
    el[`my${eventtype}`].push(callback);
    el.addEventListener(eventtype, callback);
  });
};

DOMNodeCollection.prototype.off = function (eventtype) {
  this.forEach( el => {
    el[`my${eventtype}`].forEach( func => {
      el.removeEventListener(eventtype, func);
    });
  });
};


module.exports = DOMNodeCollection;