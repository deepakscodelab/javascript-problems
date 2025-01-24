const demo = ['nemo'];

const largeArr = new Array(100).fill('nemo');

function findNemo(array) {
  const t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found Nemo');
    }
  }
  const t1 = performance.now();

  console.log(`Call to find nemo took ${t1 - t0} millisecond`);
}

// findNemo(largeArr);

const arr = ['a', 'b', 'c', 'd', 'e'];

function logAllPairsOfArry(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}

// logAllPairsOfArry(arr);

const strings = ['a', 'b', 'c', 'd'];

strings.push('e');

strings.unshift('f');

strings.splice(2, 0, 'z');
