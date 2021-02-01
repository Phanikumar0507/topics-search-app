import "./App.scss";
import TopicsContainer from "./containers/topic-container/TopicsContainer";

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__header__title">React Topics App</h1>
      </header>
      <div className="app__content">
        <TopicsContainer />
      </div>
    </div>
  );
}

export default App;
