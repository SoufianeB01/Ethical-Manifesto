import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ManifestPage from './pages/ManifestPage'
import DocumentationPage from './pages/DocumentationPage'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ManifestPage />} />
        <Route
          path="/documentation"
          element={<DocumentationPage />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App