const constants = require("../constants");
const Immutable = require("immutable");

const initialState = Immutable.Map({
  activeTab: constants.TAB_CONSOLE,
  showStressTest: false,
});

function update(state = initialState, action) {
  const { type, value } = action;

  switch (type) {
    case constants.SET_ACTIVE_TAB:
      return state
        .set("activeTab", value)
        .set("showStressTest", false);
    case constants.START_STRESS_TEST:
      return state.set("showStressTest", true);
    case constants.CLEAR_STRESS_TEST_OUTPUT:
      return state.set("showStressTest", false);
  }

  return state;
}

module.exports = update;
