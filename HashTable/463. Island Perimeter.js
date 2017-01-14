/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    var edge = 0;
    for (var i=0; i< grid.length; i++) {
        for(var j=0; j < grid[i].length; j++) {
            if(grid[i][j] == 1) {
                if(i==0 || grid[i-1][j] == 0) {
                    edge++;
                } 
                if(j==0 || grid[i][j-1] == 0) {
                    edge++;
                }
                if(i==grid.length - 1 || grid[i+1][j] == 0) {
                    edge++;
                }
                if(j==grid[i].length - 1 || grid[i][j+1] == 0) {
                    edge++;
                }
            }
        }
    }
    return edge;
};