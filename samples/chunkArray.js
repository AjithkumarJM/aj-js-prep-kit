const chunkArr = (arr, size) => {
  let chunks = [],
    parent = [];

  for (let data of arr) {
    if (chunks.length < size) chunks.push(data);
    else {
      chunks = [];
      chunks.push(data);
    }

    if (chunks.length === size) {
      parent.push(chunks);
      chunks = [];
    }
  }

  if (size <= 0) {
    parent = [];
  } else {
    chunks.length > 0 && parent.push(chunks);
  }

  console.log(parent);
  return parent;
};


const chunkArr2 = (arr, size) => {
  const chunked = [];

  for (let element of arr) {
    const last = chunked[chunked.length - 1];
    
    if (!last || last.length === size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }

  console.log(chunked);
  return chunked;
};

const chunkArr3 = (arr, size) => {
  const chunked = [];
  let index = 0;

  while (index < arr.length) {
    chunked.push(arr.slice(index, index + size));
    index += size;
  }
  
  console.log(chunked);
  return chunked;
};

chunkArr3([...Array(10).keys()], 10);
