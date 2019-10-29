"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FoodPickerApp = function (_React$Component) {
  _inherits(FoodPickerApp, _React$Component);

  function FoodPickerApp(props) {
    _classCallCheck(this, FoodPickerApp);

    var _this = _possibleConstructorReturn(this, (FoodPickerApp.__proto__ || Object.getPrototypeOf(FoodPickerApp)).call(this, props));

    _this.state = {
      options: []
    };
    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.handledeleteOption = _this.handledeleteOption.bind(_this);
    return _this;
  }

  _createClass(FoodPickerApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      try {
        var json = localStorage.getItem("options");
        var options = JSON.parse(json);
        if (options) {
          this.setState(function () {
            return {
              options: options
            };
          });
        }
      } catch (e) {
        console.log("ERROR", e);
      }
      console.log("mounted");
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.options.length !== this.state.options.length) {
        var json = JSON.stringify(this.state.options);
        localStorage.setItem("options", json);
        console.log("updated");
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log("unmounted");
    }
  }, {
    key: "handleDeleteOptions",
    value: function handleDeleteOptions() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: "handlePick",
    value: function handlePick() {
      alert(this.state.options[Math.floor(Math.random() * this.state.options.length)]);
    }
  }, {
    key: "handleAddOption",
    value: function handleAddOption(option) {
      if (!option) {
        return "enter valid restuarant";
      } else if (this.state.options.indexOf(option) > -1) {
        return "This option already exists!";
      } else {
        this.setState(function (prevState) {
          return {
            options: prevState.options.concat(option)
          };
        });
      }
    }
  }, {
    key: "handledeleteOption",
    value: function handledeleteOption(option) {
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (oldOption) {
            return option != oldOption;
          })
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var title = "Food Picker";
      var subTitle = "Find a place to snack!";
      return React.createElement(
        "div",
        null,
        React.createElement(Header, { subtitle: subTitle }),
        React.createElement(Action, {
          hasOptions: this.state.options.length > 0,
          handlePick: this.handlePick
        }),
        React.createElement(Options, {
          options: this.state.options,
          handleDeleteOptions: this.handleDeleteOptions,
          handledeleteOption: this.handledeleteOption
        }),
        React.createElement(AddOption, {
          handleAddOption: this.handleAddOption
        })
      );
    }
  }]);

  return FoodPickerApp;
}(React.Component);

// FoodPickerApp.defaultProps = {
//   options: []
// }

var Header = function Header(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      " ",
      props.title,
      " "
    ),
    props.subtitle && React.createElement(
      "h2",
      null,
      " ",
      props.subtitle,
      " "
    )
  );
};

Header.defaultProps = {
  title: "Food Picker"
};

var Action = function Action(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      {
        onClick: props.handlePick,
        disabled: !props.hasOptions },
      "What should I eat?"
    )
  );
};

var Options = function Options(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { onClick: props.handleDeleteOptions },
      "Remove all options!"
    ),
    props.options.length < 1 && React.createElement(
      "p",
      null,
      "Please add some restaurants!"
    ),
    props.options.map(function (option) {
      return React.createElement(Option, {
        key: option,
        optionText: option,
        handledeleteOption: props.handledeleteOption
      });
    })
  );
};

var Option = function Option(props) {
  console.log(props);
  return React.createElement(
    "div",
    null,
    props.optionText,
    React.createElement(
      "button",
      {
        onClick: function onClick(e) {
          props.handledeleteOption(props.optionText);
        }
      },
      "Remove"
    )
  );
};

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    // use of this inside func, must bind this
    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.handleFormSubmit = _this2.handleFormSubmit.bind(_this2);
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: "handleFormSubmit",
    value: function handleFormSubmit(e) {
      e.preventDefault();
      var data = e.target.elements.option.value.trim();
      var error = this.props.handleAddOption(data);

      this.setState(function () {
        return {
          // short hand error => error: error === error
          error: error

        };
      });
      if (!error) {
        e.target.elements.option.value = "";
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.state.error && React.createElement(
          "p",
          null,
          this.state.error
        ),
        React.createElement(
          "form",
          { onSubmit: this.handleFormSubmit },
          React.createElement("input", { type: "text", name: "option" }),
          React.createElement(
            "button",
            null,
            " Submit"
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(FoodPickerApp, null), document.getElementById("app"));
