import { createBrowserRouter } from 'react-router-dom'
import Gallery from './routes/index'
import LayoutPreview from './routes/layout-preview'

export const router = createBrowserRouter([
  { path: '/', element: <Gallery /> },
  { path: '/layouts/:slug', element: <LayoutPreview /> },
])
