const matrix = [
  [1, 0, 0],
  [1, 1, 0],
  [0, 1, 1]
];

function findPath(position, end) {
  const newArray = [];
  if (matrix[position[0]][position[0]] === 0) {
    console.log(-1);
  } else {
    newArray.push([position]);
    while (newArray.length > 0) {
      const paths = newArray.shift();
      const position = paths[paths.length - 1];
      const direction = [
        [position[0] + 1, position[1]],
        [position[0], position[1] + 1]
        [position[0] - 1, position[1]],
        [position[0], position[1] - 1]
      ];
      for (let i = 0; i < direction.length; i++) {
        if (direction[i][0] == end[0] && direction[i][1] == end[1]) {
          return paths.concat([end]);
        }
        // if (direction[i][0] < 0 || direction[i][0] >= matrix[0].length 
        //   || direction[i][1] < 0 || direction[i][1] >= matrix[0].length 
        //   || matrix[direction[i][0]][direction[i][1]] != 0) { 
        //   continue;
        // }
        newArray.push(paths.concat([direction[i]]));
      }
    }
  }
}
const path = findPath([0, 0], [2, 0]);
console.log(path);

// const matrix = [
//                 [1, 0, 0],
//                 [1, 1, 0],
//                 [0, 1, 1]
//                ];
// const Row = 2;
// const Column = 2;

// function countPaths(matrix) {
//   if (matrix[0][0] === 0) {
//     return -1;
//   }
//   // for (let i = 0; i < Row; i++) { 
//   //   if (matrix[i][0] == 0) 
//   //     matrix[i][0] = 1;
//   //   else
//   //     break;
//   // } 

//   // for (let i =1 ; i< Column ; i++) { 
//   //   if (matrix[0][i] == 0) 
//   //     matrix[0][i] = 1; 
//   //   else
//   //     break; 
//   // } 
//   for (let i = 0; i <= Row; i++) { 
//     for (let j = 0; j <= Column ; j++) {
//       //(i,j) (i-1,j) (i+1,j) (i,j-1) (i,j+1)poposition[0], position[1] + 1],
//       let direction = [
//         [i-1,j],
//         [i+1, j],
//         [i,j+1],
//         [i, j-1]
//       ]
//       if(direction[0,1] )
// //         [position[0] - 1, position[1]],
// //         [position[0], position[1] - 1]sition[0], position[1] + 1],
// //         [position[0] - 1, position[1]],
// //         [position[0], position[1] - 1]
//       if(matrix[i][j] === 0) {
//         return -1;
//       } else {
//         if(matrix[i][j] === [Row][Column])
//         return (matrix[Row][Column]);
//       }    
//     } 
//   }
// console.log(countPaths(matrix));
