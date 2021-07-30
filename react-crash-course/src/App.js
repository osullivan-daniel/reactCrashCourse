import Todo from "./components/Todo";

function App() {
    return (
        <div>
            <h1>My Todo's</h1>
            <Todo title="Learn React" />
            <Todo title="Master React" />
            <Todo title="Have a beer!" />
        </div>
    );
}

export default App;
