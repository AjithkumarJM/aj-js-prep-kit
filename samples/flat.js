// flat an array
const arr = [1, 2, 3, [4, 5], [6, [7, [8], [9]]], 11];

const flatArr = (arr, initialVal = []) => {
  let output = [...initialVal];

  for (let item of arr) {
    if (Array.isArray(item)) {
      output = flatArr(item, output);
    } else {
      output.push(item);
    }
  }

  return output;
};

// [1, 2, 3, 4, ...11]

// flat an object

const user = {
  name: "Ajith",
  phone: 9898989898,
  address: {
    pin: 625009,
    personal: {
      city: "Madurai",
      state: "TamilNadu",
      area: "Khanpalayam",
      nest: {
        name: "ji",
        nestAgain: {
          value: "test",
        },
      },
    },
    office: {
      city: "Chennai",
      state: "TamilNadu",
      area: {
        landmark: "Near Toll",
        name: "Chennai 1",
      },
    },
  },
};

const flatObj = (obj, initialVal = {}, prevKey) => {
  let output = { ...initialVal };

  for (const key in obj) {
    const currentItem = obj[key];

    if (toString.call(currentItem) === "[object Object]") {
      output = flatObj(
        currentItem,
        output,
        `${prevKey ? prevKey + `_${key}` : key}`
      );
    } else {
      const updatedKey = `user${prevKey ? `_${prevKey}` : ""}_${key}`;

      output[updatedKey] = currentItem;
    }
  }

  return output;
};

// {
//     "user__name": "Ajith",
//     "user__phone": 9898989898,
//     "user__address__pin": 625009,
//     "user__address__personal__city": "Madurai",
//     "user__address__personal__state": "TamilNadu",
//     "user__address__personal__area": "Khanpalayam",
//     "user__address__personal__nest__name": "ji",
//     "user__address__personal__nest__nestAgain__value": "test",
//     "user__address__office__city": "Chennai",
//     "user__address__office__state": "TamilNadu",
//     "user__address__office__area__landmark": "Near Toll",
//     "user__address__office__area__name": "Chennai 1"
// }

// way 2

let output = {};

const flatObj2 = (obj, parent) => {
  for (let key in obj) {
    let updatedParent = parent + "_" + key;

    toString.call(obj[key]) === "[object Object]"
      ? flatObj(obj[key], updatedParent)
      : (output[updatedParent] = obj[key]);
  }

  return output;
};

Array.prototype.myFlat = function (depth) {
  return this.reduce((flat, toFlatten) => {
    Array.isArray(toFlatten) && depth > 1
      ? flat.concat(toFlatten, depth - 1)
      : flat;
  }, []);
};


