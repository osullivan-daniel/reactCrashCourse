function Todo(props) {
    return (
        <div className="card" automagictag="card-n">
            <h2>{props.title}</h2>
            <div className="actions" automagictag="actions">
                <button className="btn" automagictag="delete">
                    Delete
                </button>
            </div>
        </div>
    );
}

export default Todo;
