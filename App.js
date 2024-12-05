// import logo from './logo.svg';
// import './App.css';               // (길벗)리액트책기준으로 267쪽까지함 오류수정하지않음

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

  import TodoTemplate from './components/TodoTemplate';
  import TodoInsert from './components/TodoInsert';
  import TodoList from './components/TodoList'; 

  const App = () => {
    return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList />
    </TodoTemplate>
    );
  };

  export default App;