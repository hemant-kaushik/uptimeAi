import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ProfilePage } from './pages/profilePage';
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/shreeramk" replace />} />
        <Route path="/:username" element={<Navigate to="overview" replace />} />
        <Route path="/:username/:tab" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
