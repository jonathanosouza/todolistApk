import {useCallback, useState} from 'react';
import {TodoService} from '../service/TodoService';
import {ITodo} from '../Interfaces/TodoInterfaces';

export const useTodo = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const getAllTodo = useCallback(async () => {
    const {status, data} = await TodoService.getAll();

    if (status !== 200) {
      throw new Error('Error' + status);
    }
    setTodos(data);
  }, []);

  const createTodo = useCallback(
    async (todo: Pick<ITodo, 'title' | 'description' | 'status'>) => {
      const {status} = await TodoService.createTodo(todo);

      if (status !== 200) {
        throw new Error('Error' + status);
      }
    },
    [],
  );

  const updateStatusTodo = useCallback(
    async (id: number, todo: Pick<ITodo, 'status'>) => {
      const {status} = await TodoService.updateStatusTodo(id, todo);

      if (status !== 200) {
        throw new Error('Error' + status);
      }
    },
    [],
  );

  const EditTodo = useCallback(
    async (
      id: number,
      todo: Pick<ITodo, 'title' | 'description' | 'status'>,
    ) => {
      const {status} = await TodoService.EditTodo(id, todo);

      if (status !== 200) {
        throw new Error('Error' + status);
      }
    },
    [],
  );

  const deleteTodo = useCallback(async (id: number) => {
    const {status} = await TodoService.DeleteTodo(id);

    if (status !== 200) {
      throw new Error('Error' + status);
    }
  }, []);

  return {
    todos,
    createTodo,
    getAllTodo,
    updateStatusTodo,
    EditTodo,
    deleteTodo,
  };
};
