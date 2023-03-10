import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTodos } from '../REDUX/actions/todosAction';

const Todos = () => {
    const { isLoading, todos, error } = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTodos());
    }, [])
    return (
        <div>
            <h1>Todos App</h1>
            {isLoading && <h3>Loading...</h3>}
            {error && <h3>{error.message}</h3>}
            <section>
                {todos.map((todo) => {
                    return <article>
                        <h3>Title: {todo.title}</h3>
                    </article>
                })}
            </section>
        </div>
    )
}

export default Todos