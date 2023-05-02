import { useRouter } from 'next/router';
import { createContext, useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';

const TaskContext = createContext();

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const { push } = useRouter();

  function createTask({ title, description }) {
    setTasks([
      ...tasks,
      {
        id: uuid(),
        title,
        description
      }
    ]);

    push('/');
  }

  function updateTask(id, updatedTask) {
    setTasks([...tasks.map(task => (task.id === id ? { ...task, ...updatedTask } : task))]);

    push('/');
  }

  function deleteTask(id) {
    setTasks([...tasks.filter(task => task.id !== id)]);
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        updateTask,
        deleteTask
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  return useContext(TaskContext);
}
