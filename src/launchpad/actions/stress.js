const constants = require("../constants");

function setActiveTab(tab) {
  return {
    type: constants.SET_ACTIVE_TAB,
    value: tab,
  };
}

module.exports = {
  setActiveTab,
};
