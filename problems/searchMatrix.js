// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties: Integers in each row are sorted from left to right.The first integer of each row is greater than the last integer of the previous row.

const searchMatrix = (matrix, target) => {
  if (matrix.length == 0) return false;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (target <= matrix[i][j]) {
        return target == matrix[i][j];
      }
    }
  }
  return false;
};
