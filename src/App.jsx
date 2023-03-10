import {BrowserRouter, Routes, Route} from 'react-router-dom';
import "./App.scss";

import Header from "./components/Header/Header";
import HomePage from './pages/HomePage';
import UploadPage from './pages/UploadPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />;
                <Route path="/video/:videoId" element={<HomePage />} />;
                <Route path="/video" element={<HomePage />} />;
                <Route path="/upload" element={<UploadPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
