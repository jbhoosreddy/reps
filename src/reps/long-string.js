// Dependencies
const React = require("react");
const {
  escapeString,
  sanitizeString,
  isGrip,
  wrapRender,
} = require("./rep-utils");
// Shortcuts
const { span } = React.DOM;

/**
 * Renders a long string grip.
 */
const LongStringRep = React.createClass({
  displayName: "LongStringRep",

  propTypes: {
    useQuotes: React.PropTypes.bool,
    style: React.PropTypes.object,
    cropLimit: React.PropTypes.number.isRequired,
    member: React.PropTypes.string,
    object: React.PropTypes.object.isRequired,
  },

  getDefaultProps: function () {
    return {
      useQuotes: true,
    };
  },

  render: wrapRender(function () {
    let {
      cropLimit,
      member,
      object,
      style,
      useQuotes
    } = this.props;
    let {fullText, initial, length} = object;

    let config = {className: "objectBox objectBox-string"};
    if (style) {
      config.style = style;
    }

    let string = member && member.open
      ? fullText || initial
      : initial.substring(0, cropLimit);

    if (string.length < length) {
      string += "\u2026";
    }
    let formattedString = useQuotes ? escapeString(string) : sanitizeString(string);
    return span(config, formattedString);
  }),
});

function supportsObject(object, type) {
  if (!isGrip(object)) {
    return false;
  }
  return object.type === "longString";
}

// Exports from this module
module.exports = {
  rep: LongStringRep,
  supportsObject: supportsObject,
};
