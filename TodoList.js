import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = () => { //값이 지정되었지만 사용불가
    return (
        <div className="TodoList">
            <TodoListItem />
            <TodoListItem />
            <TodoListItem />
        </div>
    );
};