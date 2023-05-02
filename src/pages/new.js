import { useEffect, useState } from 'react';
import { useTasks } from '../context/taskContext';
import { useRouter } from 'next/router';

export default function TaskFormPage() {
  const [task, setTask] = useState({
    title: '',
    description: ''
  });

  const { createTask, updateTask, tasks } = useTasks();
  const { query } = useRouter();

  function handleChange(event) {
    const { name, value } = event.target;

    setTask({ ...task, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(query);
    console.log(task);

    if (!query.id) {
      createTask(task);
    } else {
      updateTask(query.id, task);
    }
  }

  useEffect(() => {
    if (query.id) {
      const taskFound = tasks.find(task => task.id === query.id);
      const { title, description } = taskFound;

      setTask({
        title,
        description
      });
    }
  }, [query.id, tasks]);

  return (
    <>
      <form
        className='
          bg-gray-700
          p-9
          rounded
        '
        onSubmit={handleSubmit}
      >
        <legend
          className='
            mb-8
            text-2xl
          '
        >
          {query.id ? 'Update a Task' : 'Add a new Task '}
        </legend>
        <input
          type='text'
          name='title'
          onChange={handleChange}
          value={task.title}
          placeholder='Write a title'
          className='
            bg-gray-800
            focus:text-gray-100 focus:outline-none
            w-full
            px-4 py-3 mb-5
            rounded
          '
        />
        <textarea
          name='description'
          onChange={handleChange}
          value={task.description}
          rows='2'
          placeholder='Write a description'
          className='
            bg-gray-800
            focus:text-gray-100 focus:outline-none
            w-full
            px-4 py-3 mb-5
            resize-none
            rounded
          '
        />
        <fieldset className='flex justify-center gap-8'>
          <button
            type='reset'
            disabled={!task.title}
            onClick={() => setTask({ title: '', description: '' })}
            className='
              bg-green-500 hover:bg-green-400
              px-5 py-2
              font-bold
              rounded
              w-32
              disabled:opacity-30
            '
          >
            Reset
          </button>
          <button
            type='submit'
            disabled={!task.title}
            className='
              bg-green-500 hover:bg-green-400
              px-5 py-2
              font-bold
              rounded
              w-32
              disabled:opacity-30
            '
          >
            Save
          </button>
        </fieldset>
      </form>
    </>
  );
}
