const root = document.querySelector("#root");

const greetings = React.createElement(
  "div",
  {
    className: "greeting",
  },
  "Hello, React!"
);

ReactDOM.render(greetings, root);
