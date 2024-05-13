import { FC, useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypedSelectors";
import { useActions } from "../hooks/useActions";

const TodoList: FC = () => {
  const { todos, page, error, limit, loading } = useTypedSelector(
    (state) => state.todo,
  );

  const pages = [1, 2, 3, 4, 5];

  const { fetchTodos, setTodoPage } = useActions();

  useEffect(() => {
    fetchTodos(page, limit);
  }, [page]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.id} - {todo.title}
        </div>
      ))}
      <div style={{ display: "flex" }}>
        {pages.map((p) => (
          <button
            onClick={() => setTodoPage(p)}
            key={p}
            style={{
              border: p === page ? "2px solid green" : "1px solid gray",
              padding: 10,
              cursor: "pointer",
            }}
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
