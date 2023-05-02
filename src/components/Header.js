import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTasks } from '../context/taskContext';
import { AiOutlinePlus } from 'react-icons/ai';

export default function Header() {
  const { push } = useRouter();
  const { tasks } = useTasks();
  const tasksQuantity = tasks.length;

  return (
    <header
      className='
          flex items-center gap-6
          bg-gray-800
          p-4 md:px-28 md:py-5
          sticky top-0
        '
    >
      <Link href='/'>
        <h1
          className='
            font-black
            text-lg
          '
        >
          Task App
        </h1>
      </Link>
      <span
        className='
          text-gray-400
          font-bold
        '
      >
        {tasksQuantity === 1 ? `${tasksQuantity} task` : `${tasksQuantity} tasks`}
      </span>
      <div
        className='
          flex-grow
          text-right
        '
      >
        <button
          className='
            bg-green-500 hover:bg-green-400
            px-5 py-2
            font-bold
            rounded
            inline-flex items-center gap-3
          '
          onClick={() => push('/new')}
        >
          <AiOutlinePlus />
          Add Task
        </button>
      </div>
    </header>
  );
}
