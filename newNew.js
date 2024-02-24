var merge = function (a, m, b, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;
  
    while (i >= 0 && j >= 0) {
      if (a[i] > b[j]) {
        a[k--] = a[i--];
        console.log(a);
      } else {
        a[k--] = b[j--];
      }
    }
  
    while (j >= 0) {
      a[k--] = b[j--];
    }
  };

  merge([1,2,3,0,0,0], 3, [2,5,6], 3)