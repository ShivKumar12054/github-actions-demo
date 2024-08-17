class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Hello to="sambit" from="shiva" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
