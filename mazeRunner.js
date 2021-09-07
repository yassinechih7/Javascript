
function mazeRunner(maze, directions) {
  const [SAFE_PLACE_TO_WALK, WALL, START_POINT, FINISH_POINT] = [0, 1, 2, 3];

  let [currentLocation, wayOut] = [
    () => {
      let pos = [];
      maze.forEach((e, index) => {
        const elementPostion = e.indexOf(START_POINT);
        if (elementPostion != -1) {
          pos = [index, elementPostion];
        }
      });
      return pos;
    },
    () => {
      let pos = [];
      maze.forEach((e, index) => {
        const elementPostion = e.indexOf(FINISH_POINT);
        if (elementPostion != -1) {
          pos = [index, elementPostion];
        }
      });
      return pos;
    },
  ];

  const moves = {
    // N = Up // E = Right // W = Left // S = Down
    N: () => {},
    E: () => {},
    W: () => {},
    S: () => {},
  };
}
