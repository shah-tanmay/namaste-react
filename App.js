const parent = React.createElement(
  "div",
  {
    id: "parent", //this is used to give attributes to the tag.
  },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm tag h1 tag"),
    React.createElement("h2", {}, "I'm tag h2 tag"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
