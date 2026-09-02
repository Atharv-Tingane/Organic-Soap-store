import Cursor from './components/utility/Cursor'
import AppRoutes from './routes/AppRoutes'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
      <AppRoutes />
      <Toaster position="top-right" />
      <Cursor />
    </>
  )
}

export default App
