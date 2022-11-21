const root = document.querySelector("#root");

const element = (
  <div class="greeting">
    <div class="greeting__tile">Hello, world!</div>
    <div class="greeting__text">I'm learning react</div>
  </div>
);

ReactDOM.render(element, root);
