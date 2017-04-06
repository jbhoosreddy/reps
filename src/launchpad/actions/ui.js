const constants = require("../constants");

function setActiveTab(tab) {
  return {
    type: constants.SET_ACTIVE_TAB,
    value: tab,
  };
}

function startStressTest(tab) {
  return {
    type: constants.START_STRESS_TEST,
  };
}

function clearStressTestOutput(tab) {
  return {
    type: constants.CLEAR_STRESS_TEST_OUTPUT,
  };
}

module.exports = {
  clearStressTestOutput,
  setActiveTab,
  startStressTest,
};
