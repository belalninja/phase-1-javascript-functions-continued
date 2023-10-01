// code your solution here
const saturdayFun = function (activity = `roller-skate`) {
  return `This Saturday, I want to ${activity}!`;
};

const mondayWork = function (activity = `go to the office`) {
  return `This Monday, I will ${activity}.`;
};

const wrapAdjective = function (adjective = `*`) {
  return function (special) {
    return `You are ${adjective}${special}${adjective}!`;
  };
};

console.log(wrapAdjective(`w`));
