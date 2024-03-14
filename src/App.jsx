import { Route, Routes } from 'react-router-dom';
import Authorization from './components/Authorization/Authorization';

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Authorization />} />
        </Routes>
    );
}
