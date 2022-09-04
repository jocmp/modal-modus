import { Route, Routes } from 'react-router-dom';
import './App.css';
import EditCard from './EditCard';
import CardIndex from './CardIndex';
import CardModal from './CardModal';
import Layout from './Layout';

function App() {
  return (
    <Routes>
      <Route index element={<Layout />} />
      <Route path="cards" element={<CardModal />}>
        <Route index element={<CardIndex />} />
        <Route path=":id" element={<EditCard />} />
      </Route>
    </Routes>
  );
}

export default App;
