import '../styles/globals.css';
import { TasksProvider } from '../context/taskContext';
import Layout from '../components/Layout';

export default function App({ Component, pageProps }) {
  return (
    <TasksProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TasksProvider>
  );
}
