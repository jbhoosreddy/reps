const React = require("react");
const { DOM: dom, PropTypes, createFactory } = React;

const { connect } = require("react-redux");
const { bindActionCreators } = require("redux");

const constants = require("../constants");
const selectors = require("../selectors");

const Console = createFactory(require("./Console"));
const StressTest = createFactory(require("./StressTest"));

require("./Launchpad.css");

const Launchpad = React.createClass({
  displayName: "Launchpad",

  propTypes: {
    client: PropTypes.object.isRequired,
    shortcuts: PropTypes.object.isRequired,
    clearExpressions: PropTypes.func.isRequired,
  },

  onNavElementClick: function (tab) {
    this.props.setActiveTab(tab);
  },

  render: function () {
  console.log(this.props);
    let {
      activeTab,
      addInput,
      changeCurrentInput,
      clearExpressions,
      currentInputValue,
      evaluateInput,
      expressions,
      hideResultPacket,
      navigateInputHistory,
      shortcuts,
      showResultPacket,
      showStressTest,
      clearStressTestOutput,
      startStressTest,
    } = this.props;

    const child = activeTab === constants.TAB_CONSOLE
      ? Console({
        addInput,
        changeCurrentInput,
        clearExpressions,
        currentInputValue,
        evaluateInput,
        expressions,
        hideResultPacket,
        navigateInputHistory,
        shortcuts,
        showResultPacket,
      })
      : StressTest({
        showStressTest,
        clearStressTestOutput,
        startStressTest,
      });

    return dom.main({},
      dom.nav({},
        dom.ul({},
          dom.li({
            className: activeTab === constants.TAB_CONSOLE
              ? "active"
              : "",
            onClick: () => this.onNavElementClick(constants.TAB_CONSOLE)
          }, "Console"),
          dom.li({
            className: activeTab === constants.TAB_STRESS_TEST
              ? "active"
              : "",
            onClick: () => this.onNavElementClick(constants.TAB_STRESS_TEST)
          }, "Stress Test"),
        )
      ),
      child
    );
  }
});

function mapStateToProps(state) {
  return {
    expressions: selectors.getExpressions(state),
    currentInputValue: selectors.getCurrentInputValue(state),
    activeTab: selectors.getActiveTab(state),
    showStressTest: state.ui.get("showStressTest")
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(require("../actions"), dispatch);
}

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(Launchpad);
