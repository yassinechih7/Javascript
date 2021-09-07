// N = Up // E = Right // W = Left // S = Down

function mazeRunner(maze, directions) {
  let [currentLocation, wayOut] = [
    () => {
      let pos = [];
      maze.forEach((e, index) => {
        const elementPostion = e.indexOf(2);
        if (elementPostion != -1) {
          pos = [index, elementPostion];
        }
      });
      return pos;
    },
    () => {
      let pos = [];
      maze.forEach((e, index) => {
        const elementPostion = e.indexOf(3);
        if (elementPostion != -1) {
          pos = [index, elementPostion];
        }
      });
      return pos;
    },
  ];

  const moves = {
    N: () => {},
    E: () => {},
    W: () => {},
    S: () => {},
  };
}
