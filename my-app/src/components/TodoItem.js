import { Link } from 'react-router-dom';
import styles from '../App.module.css';

export const TodoItem = ({ todo, editableTodoId, editedTodoText, startEdit, setEditedTodoText, showButtons, deleteTodo, saveEdit }) => {
	const truncatedText = todo.text.length > 10 ? `${todo.text.slice(0, 10)}...` : todo.text;

	return (
		<li key={todo.id}>
			{editableTodoId === todo.id ? (
				<>
					<input type="text" value={editedTodoText} onChange={(event) => setEditedTodoText(event.target.value)} className={styles.inputField} />
					{showButtons && (
						<>
							<button onClick={saveEdit} className={styles.showButton}>
								Сохранить
							</button>
							<button onClick={() => startEdit(null, '')} className={styles.showButton}>
								Отмена
							</button>
						</>
					)}
				</>
			) : (
				<>
					<Link to={`/task/${todo.id}`} title={todo.text}>
						{truncatedText}
					</Link>
					{showButtons && (
						<>
							<button onClick={() => startEdit(todo.id, todo.text)} className={styles.showButton}>
								Изменить
							</button>
							<button onClick={() => deleteTodo(todo.id)} className={styles.showButton}>
								Удалить
							</button>
						</>
					)}
				</>
			)}
		</li>
	);
};
