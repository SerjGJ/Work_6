import React from 'react';
import { Link, useNavigate, useMatch } from 'react-router-dom';
import styles from '../App.module.css';
import { TodoItem } from './TodoItem';

export const TaskPage = ({ todos, editableTodoId, editedTodoText, startEdit, saveEdit, deleteTodo, setEditedTodoText }) => {
	const navigate = useNavigate();
	const match = useMatch('/task/:taskId');
	const taskId = match?.params.taskId;

	const goBack = () => {
		navigate('/');
	};

	const todo = todos.find((todo) => String(todo.id) === taskId);

	if (!todo) {
		return (
			<div className={styles.errorPage}>
				<h2>Ошибка 404: Страница не найдена</h2>
				<p className={styles.linkContainer}>
					Вернуться на{' '}
					<Link to="/" className={styles.link}>
						Главную страницу
					</Link>
				</p>
			</div>
		);
	}

	return (
		<div>
			<button onClick={goBack} className={styles.backButton}>
				Назад
			</button>
			<h2>{todo.text}</h2>
			<TodoItem
				todo={todo}
				editableTodoId={editableTodoId}
				editedTodoText={editedTodoText}
				startEdit={startEdit}
				saveEdit={saveEdit}
				deleteTodo={deleteTodo}
				setEditedTodoText={setEditedTodoText}
				showButtons={true}
			/>
		</div>
	);
};
