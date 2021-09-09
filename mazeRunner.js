maze = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 3],
  [1, 0, 1, 0, 1, 0, 1],
  [0, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 2, 1, 0, 1, 0, 1]
]


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

  const itemLocator = (pos) => {
    return maze[pos[0]][pos[1]]
  }

  const safePlaceToWalk = (a) => (itemLocator(a) == SAFE_PLACE_TO_WALK ? true : false);
  const wall = (a) => (a == WALL ? true : false);
  const inRange = (a) => {
    return a[0] <= maze.length - 1 && a[1] <= maze[0].length - 1 ? true : false;
  };

  const finishPoint = valueFinder(FINISH_POINT);

  let currentLocation = valueFinder(START_POINT);
  let State = '';

  const aMove = (x, y) => {

    const newPosition = [currentLocation[0] + x, currentLocation[1] + y];

    if (inRange(newPosition)) {
      console.log(safePlaceToWalk(valueFinder()))
      if (safePlaceToWalk(newPosition)) {
        currentLocation = newPosition;

        return true
      } else if (wall(newPosition)) {
        return "Dead"
      } else if (newPosition == finishPoint) {
        return "Finish"

      }
    }
  }

  const moves = {
    // N = Up // E = Right // W = Left // S = Down
    N: () => aMove(-1, 0),
    E: () => aMove(0, 1),
    W: () => aMove(0, -1),
    S: () => aMove(1, 0),
  };

  directions.forEach(
    e => {
      switch (e) {
        case 'N':

          State = moves.N();
          break;
        case 'E':
          State = moves.E();
          break;
        case 'W':
          State = moves.W();
          break;
        case 'S':
          State = moves.S();
          break;
      }
    }
  )
}

mazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "E", "E", "E"])
