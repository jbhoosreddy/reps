function getExpressions(state) {
  return state.expressions;
}

function getInputState(state) {
  return state.input;
}

function getUiState(state) {
  return state.ui;
}

function getCurrentInputValue(state) {
  return getInputState(state).get("currentValue");
}

function getActiveTab(state) {
  return getUiState(state).get("activeTab");
}

module.exports = {
  getActiveTab,
  getCurrentInputValue,
  getExpressions,
};
