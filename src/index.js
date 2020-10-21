
module.exports = function towelSort (matrix) {
  let result = [];

  if (matrix && matrix.length > 0) {

    for (let i=0; i < matrix.length; i++) {

      if (Array.isArray(matrix[i])) {
        let res = matrix[i];
        if (i % 2) {
          for (let j = res.length-1; j >= 0; j--) {
            result.push(res[j])
          }
        } else {
          for (let j = 0; j<res.length; j++) {
            result.push(res[j])
          }
        }
      }
    }
  }   

  return result;
}
