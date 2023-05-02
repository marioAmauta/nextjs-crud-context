import { useRouter } from 'next/router';
import { useTasks } from '../context/taskContext';
import { VscTrash } from 'react-icons/vsc';

export default function Home() {
  const { tasks, deleteTask } = useTasks();
  const { push } = useRouter();

  return (
    <>
      {tasks.length === 0 ? (
        <h2>There are no tasks</h2>
      ) : (
        <ul>
          {tasks.map(({ id, title, description }, index) => (
            <li
              onClick={() => {
                console.log(id);
                push(`/edit/${id}`);
              }}
              key={id}
              className='
                bg-gray-700 hover:bg-gray-600
                cursor-pointer
                p-6 mb-4
                rounded
                flex justify-between gap-5
              '
            >
              <span className='text-3xl'>{index + 1}</span>
              <div className='flex-grow'>
                <h2 className='font-bold'>{title}</h2>
                <p className='text-gray-300'>{description}</p>
                <span className='text-gray-400'>{id}</span>
              </div>
              <button
                onClick={event => {
                  event.stopPropagation();

                  deleteTask(id);
                }}
                className='
                  bg-red-700 hover:bg-red-600
                  h-fit
                  px-3 py-1
                  rounded
                  flex items-center gap-2
                '
              >
                <VscTrash />
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
