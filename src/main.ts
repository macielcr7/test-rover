import StartNavigation from '.';

const mock_input = '5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM';
const mock_input_raw = `5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM`;

const app = new StartNavigation(mock_input);
const dispatch = app.dispatch();
console.info(dispatch);