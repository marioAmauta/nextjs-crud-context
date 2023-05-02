import Header from './Header';

export default function Layout({ children }) {
  return (
    <div
      className='
        min-h-screen
        bg-gray-900 text-white
      '
    >
      <Header />
      <main
        className='
          py-10 px-4 md:px-28
        '
      >
        {children}
      </main>
    </div>
  );
}
