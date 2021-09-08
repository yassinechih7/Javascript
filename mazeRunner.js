function mazeRunner(maze, directions) {
  const [SAFE_PLACE_TO_WALK, WALL, START_POINT, FINISH_POINT] = [0, 1, 2, 3];

  const valueFinder = (value) => {
    let pos = [];
    maze.forEach((e, index) => {
      const elementPostion = e.indexOf(value);
      if (elementPostion != -1) {
        pos = [index, elementPostion];
      }
    });

    return pos.length == undefined ? false : pos;
  };
  const safePlaceToWalk = (a) => (a == SAFE_PLACE_TO_WALK ? true : false);
  const wall = (a) => (a == WALL ? true : false);
  const inRange = (a) => {
    return a[0] <= maze.length - 1 && a[1] <= maze[0].length - 1 ? true : false;
  };

  const finishPoint = valueFinder(FINISH_POINT);

  let currentLocation = valueFinder(START_POINT);
  let State = '';

  const moves = {
    // N = Up // E = Right // W = Left // S = Down
    N: () => {
      const newPosition = [currentLocation[0] - 1, currentLocation[1]];
      if (inRange(newPosition)) {
        if (safePlaceToWalk(newPosition)) {
          currentLocation = newPosition;
          return true
        } else if (wall(newPosition)) {
          return "Dead"
        } else if (newPosition == finishPoint) {
          return "Finish"
        }
      }
    },
    E: () => {
      const newPosition = [currentLocation[0], currentLocation[1] + 1];
      if (inRange(newPosition)) {
        if (safePlaceToWalk(newPosition)) {
          currentLocation = newPosition;
          return true
        } else if (wall(newPosition)) {
          return "Dead"
        } else if (newPosition == finishPoint) {
          return "Finish"
        }
      }
    },
    W: () => {
      const newPosition = [currentLocation[0], currentLocation[1] - 1];
    },
    S: () => {
      const newPosition = [currentLocation[0] + 1, currentLocation[1]];
      if (inRange(newPosition)) {
        if (safePlaceToWalk(newPosition)) {
          currentLocation = newPosition;
          return true
        } else if (wall(newPosition)) {
          return "Dead"
        } else if (newPosition == finishPoint) {
          return "Finish"
        }
      }
    },
  };
  directions.forEach(
    e => {
      switch (e) {
        case N:
          State = moves.N();
          break;
        case E:
          State = moves.E();
          break;
        case W:
          State = moves.W();
          break;
        case S:
          State = moves.S();
          break;
      }
    }
  )
}
