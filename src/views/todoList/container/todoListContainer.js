import styled from 'styled-components';

import { useObserver } from 'mobx-react';
import { useState } from 'react';
import indexStore from 'store/index';

function todoListContainer() {
    const { todoStore } = indexStore();
    const [inputValue, setInputValue] = useState('');
    const inputChnage = e => {
        setInputValue(e.target.value);
    };
    const addTodoHandler = () => {
        todoStore.addTodo({ title: inputValue, completed: false });
    };
    return useObserver(() => (
        <Container>
            <div>
                <div>전체 아이템 갯수 : {todoStore.list.length} </div>
                <div>종료된 아이템 : {todoStore.completedCnt} </div>
                <div>종료되지 않는 아이템 : {todoStore.noneCompletedCnt} </div>
            </div>
            <div>
                <input type="text" onChange={inputChnage} />
                <button onClick={() => addTodoHandler()}>Todo 추가</button>
            </div>
            <TodoList>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Completed</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todoStore.list.map((v, i) => (
                            <tr key={i}>
                                <td>{v.title}</td>
                                <td>{v.completed ? '✅' : ''}</td>
                                <td>
                                    <div>
                                        <button
                                            onClick={() =>
                                                todoStore.completedTodo(i)
                                            }
                                        >
                                            Toggle
                                        </button>
                                        <button
                                            onClick={() =>
                                                todoStore.removeTodo(i)
                                            }
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </TodoList>
        </Container>
    ));
}

export default todoListContainer;

const Container = styled.div`
    margin: 10px;
`;
const TodoList = styled.div``;
