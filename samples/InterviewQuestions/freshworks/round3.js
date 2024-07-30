var obj = {
  x: 2,
  y: 3,
};

// write a function to make these actions
// get('x')
// set('x', 10)
// undo()
// redo()
// del('y')

var unRe = undoRedo(obj);

var obj = {
  x: 1,
  y: 2,
};

let actions = [];
let reDoActions = [];

function unRe(params) {
  let initialValue = params;

  function set(key, value) {
    value !== initialValue[key] &&
      actions.push({
        method: set,
        properties: { key, value: initialValue[key], currentValue: value },
      });

    initialValue[key] = value;
  }

  function undo() {
    let last = actions[actions.length - 1];
    console.log(last);

    let values = { key: last.properties.key, value: last.properties.value };

    last.method(values.key, values.value);
  }

  return {
    set,
    undo,
  };
}

unRe(obj).set('x', 10);
unRe(obj).undo();
unRe(obj).set('x', 11);

console.log(obj);
