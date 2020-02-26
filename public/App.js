"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var NotesFilter =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NotesFilter, _React$Component);

  function NotesFilter() {
    _classCallCheck(this, NotesFilter);

    return _possibleConstructorReturn(this, _getPrototypeOf(NotesFilter).apply(this, arguments));
  }

  _createClass(NotesFilter, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, "This is a placeholder for the notes filter.");
    }
  }]);

  return NotesFilter;
}(React.Component);

var NotesTable =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(NotesTable, _React$Component2);

  function NotesTable() {
    _classCallCheck(this, NotesTable);

    return _possibleConstructorReturn(this, _getPrototypeOf(NotesTable).apply(this, arguments));
  }

  _createClass(NotesTable, [{
    key: "render",
    value: function render() {
      var rowStyle = {
        border: "1px solid silver",
        padding: 4
      };
      return React.createElement("table", null, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", {
        style: rowStyle
      }, "ID"), React.createElement("th", {
        style: rowStyle
      }, "Title"))), React.createElement("tbody", null, React.createElement(NoteRow, {
        rowStyle: rowStyle,
        note_id: 1,
        note_title: "Switch to JavaScript within JSX"
      }), " ", React.createElement(NoteRow, {
        rowStyle: rowStyle,
        note_id: 1,
        note_title: "React's pholosophy with regard to inheritance"
      }), " "));
    }
  }]);

  return NotesTable;
}(React.Component);

var NoteRow =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(NoteRow, _React$Component3);

  function NoteRow() {
    _classCallCheck(this, NoteRow);

    return _possibleConstructorReturn(this, _getPrototypeOf(NoteRow).apply(this, arguments));
  }

  _createClass(NoteRow, [{
    key: "render",
    value: function render() {
      var style = this.props.rowStyle;
      return React.createElement("tr", null, React.createElement("td", {
        style: style
      }, this.props.note_id), React.createElement("td", {
        style: style
      }, this.props.note_title));
    }
  }]);

  return NoteRow;
}(React.Component);

var NotesAdd =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(NotesAdd, _React$Component4);

  function NotesAdd() {
    _classCallCheck(this, NotesAdd);

    return _possibleConstructorReturn(this, _getPrototypeOf(NotesAdd).apply(this, arguments));
  }

  _createClass(NotesAdd, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, "This is a placeholder for the notes add.");
    }
  }]);

  return NotesAdd;
}(React.Component);

var NotesList =
/*#__PURE__*/
function (_React$Component5) {
  _inherits(NotesList, _React$Component5);

  function NotesList() {
    _classCallCheck(this, NotesList);

    return _possibleConstructorReturn(this, _getPrototypeOf(NotesList).apply(this, arguments));
  }

  _createClass(NotesList, [{
    key: "render",
    value: function render() {
      return React.createElement(React.Fragment, null, React.createElement("h1", null, "Study Notes"), React.createElement(NotesFilter, null), React.createElement("hr", null), React.createElement(NotesTable, null), React.createElement("hr", null), React.createElement(NotesAdd, null));
    }
  }]);

  return NotesList;
}(React.Component);

var element = React.createElement(NotesList, null);
ReactDOM.render(element, document.getElementById('contents'));