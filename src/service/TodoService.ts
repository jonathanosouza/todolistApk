import {ITodo} from '../Interfaces/TodoInterfaces';
import {api} from '../api';

const getAll = () => api.get<ITodo[]>('/todos');

const createTodo = (todo: Pick<ITodo, 'title' | 'description' | 'status'>) =>
  api.post<ITodo[]>('/todos', todo);

const updateStatusTodo = (id: number, todo: Pick<ITodo, 'status'>) =>
  api.put<ITodo[]>(`/todos/update/${id}`, todo);

const EditTodo = (
  id: number,
  todo: Pick<ITodo, 'title' | 'description' | 'status'>,
) => api.put<ITodo[]>(`/todos/update/${id}`, todo);

const DeleteTodo = (id: number) => api.delete<ITodo[]>(`/todos/delete/${id}`);

export const TodoService = {
  getAll,
  createTodo,
  updateStatusTodo,
  EditTodo,
  DeleteTodo,
};
