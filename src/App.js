
import './App.css';
// import Todos from './Components/Todos';
import CounterView from './features/counter/CounterView';
import PostsView from './features/posts/PostsView';

function App() {
  return (
    <div className="App">
      {/* <Todos /> */}
      <CounterView />
      <PostsView />
    </div>
  );
}

export default App;
