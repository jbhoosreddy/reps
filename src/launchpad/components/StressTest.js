const React = require("react");
const { DOM: dom, PropTypes, createFactory } = React;

const Rep = createFactory(require("../../reps/rep").Rep);
const Grip = require("../../reps/grip");
const { MODE } = require("../../reps/constants");

const StressTest = React.createClass({
  displayName: "StressTest",

  propTypes: {
    showStressTest: PropTypes.bool.isRequired,
    clearStressTestOutput: PropTypes.func.isRequired,
    startStressTest: PropTypes.func.isRequired,
  },

  render: function () {
    let {
      clearStressTestOutput,
      showStressTest,
      startStressTest,
    } = this.props;

    const headerChild = showStressTest === false
      ? dom.button({
        className: "stress",
        onClick: startStressTest,
      }, "Launch Stress test")
      : dom.button({
        className: "clear-stress",
        onClick: clearStressTestOutput,
      }, "Clear output");

    let children = [];
    if (showStressTest) {
      children = Array.from({length: 1000})
        .map(() => Rep({
          object: {
            "type": "object",
            "actor": "server2.conn8.child1/obj32",
            "class": "Array",
            "extensible": true,
            "frozen": false,
            "sealed": false,
            "ownPropertyLength": 101,
            "preview": {
              "kind": "ArrayLike",
              "length": 100,
              "items": [
                {
                  "type": "object",
                  "actor": "server2.conn8.child1/obj33",
                  "class": "Object",
                  "extensible": true,
                  "frozen": false,
                  "sealed": false,
                  "ownPropertyLength": 5
                },
                {
                  "type": "object",
                  "actor": "server2.conn8.child1/obj34",
                  "class": "Object",
                  "extensible": true,
                  "frozen": false,
                  "sealed": false,
                  "ownPropertyLength": 5
                },
                {
                  "type": "object",
                  "actor": "server2.conn8.child1/obj35",
                  "class": "Object",
                  "extensible": true,
                  "frozen": false,
                  "sealed": false,
                  "ownPropertyLength": 5
                },
                {
                  "type": "object",
                  "actor": "server2.conn8.child1/obj36",
                  "class": "Object",
                  "extensible": true,
                  "frozen": false,
                  "sealed": false,
                  "ownPropertyLength": 5
                },
                {
                  "type": "object",
                  "actor": "server2.conn8.child1/obj37",
                  "class": "Object",
                  "extensible": true,
                  "frozen": false,
                  "sealed": false,
                  "ownPropertyLength": 5
                },
                {
                  "type": "object",
                  "actor": "server2.conn8.child1/obj38",
                  "class": "Object",
                  "extensible": true,
                  "frozen": false,
                  "sealed": false,
                  "ownPropertyLength": 5
                },
                {
                  "type": "object",
                  "actor": "server2.conn8.child1/obj39",
                  "class": "Object",
                  "extensible": true,
                  "frozen": false,
                  "sealed": false,
                  "ownPropertyLength": 5
                },
                {
                  "type": "object",
                  "actor": "server2.conn8.child1/obj40",
                  "class": "Object",
                  "extensible": true,
                  "frozen": false,
                  "sealed": false,
                  "ownPropertyLength": 5
                },
                {
                  "type": "object",
                  "actor": "server2.conn8.child1/obj41",
                  "class": "Object",
                  "extensible": true,
                  "frozen": false,
                  "sealed": false,
                  "ownPropertyLength": 5
                },
                {
                  "type": "object",
                  "actor": "server2.conn8.child1/obj42",
                  "class": "Object",
                  "extensible": true,
                  "frozen": false,
                  "sealed": false,
                  "ownPropertyLength": 5
                }
              ]
            }
          },
          defaultRep: Grip,
          mode: MODE.LONG
        }));
    }

    return dom.section({className: "StressTest"},
      dom.header({},
        headerChild
      ),
      ...children
    );
  }
});

module.exports = StressTest;
