const React = require("react");
const { DOM: dom, PropTypes, createFactory } = React;

const Header = createFactory(require("./Header"));
const ResultsList = createFactory(require("./ResultsList"));

require("./Console.css");

const Console = React.createClass({
  displayName: "Console",

  propTypes: {
    shortcuts: PropTypes.object.isRequired,
    clearExpressions: PropTypes.func.isRequired,
  },

  componentDidMount: function () {
    this.props.shortcuts.on("CmdOrCtrl+Shift+L", this.props.clearExpressions);
  },

  componentWillUnmount: function () {
    this.props.shortcuts.off("CmdOrCtrl+Shift+L");
  },

  render: function () {
    let {
      addInput,
      changeCurrentInput,
      clearExpressions,
      currentInputValue,
      evaluateInput,
      expressions,
      hideResultPacket,
      navigateInputHistory,
      showResultPacket,
    } = this.props;

    return dom.section({className: "console"},
      Header({
        addInput,
        changeCurrentInput,
        clearResultsList: clearExpressions,
        currentInputValue,
        evaluate: evaluateInput,
        navigateInputHistory,
      }),
      ResultsList({
        expressions: expressions.reverse(),
        hideResultPacket,
        showResultPacket,
      })
    );
  }
});

module.exports = Console;
