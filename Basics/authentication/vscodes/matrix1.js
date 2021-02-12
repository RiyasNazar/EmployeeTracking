const matrix = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 1, 1]
];
function shortPath(start, end) {
  visited: Boolean;
  visited[start[0]][start[0]]; 
  for (let i = 0; i < start; i++) { 
      for (let j = 0; j < end; j++) 
      { 
          if (matrix[i][j] == '0') 
              visited[i][j] = true; 
          else
              visited[i][j] = false; 
          if (matrix[i][j] == end) 
          { 
             start[0].row = i; 
             start[0].col = j; 
          } 
      } 
  } 
}
const path = shortPath([0, 0], [2, 0]);
console.log(path);