// fn(Arr) should return [1,3,2] it should return least smallest which means it should return 4

function leastSmallest(arr) {
    const uniqueArr = [...new Set(arr.filter((e) => e > 0))];
  
    uniqueArr.sort();
  
    let smallest = 1;
  
    for (const num of uniqueArr) {
      if (num <= smallest) {
        smallest = num + 1;
      }
    }
  
    console.log(smallest);
    return smallest;
  }
  
  leastSmallest([1, 3, 0, 2, 6]);
  