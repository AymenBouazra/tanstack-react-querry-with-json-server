import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import ListPosts from './components/ListPosts';
import 'bootstrap/dist/css/bootstrap.min.css'
const queryClient = new QueryClient()
function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ListPosts />
      </QueryClientProvider>
    </div>
  );
}

export default App;
