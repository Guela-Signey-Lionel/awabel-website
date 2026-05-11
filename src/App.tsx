import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Programs from '@/pages/Programs'
import News from '@/pages/News'
import Partners from '@/pages/Partners'
import Join from '@/pages/Join'
import Contact from '@/pages/Contact'
import Legal from '@/pages/Legal'
import NotFound from '@/pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="programs" element={<Programs />} />
          <Route path="news" element={<News />} />
          <Route path="partners" element={<Partners />} />
          <Route path="join" element={<Join />} />
          <Route path="contact" element={<Contact />} />
          <Route path="legal" element={<Legal />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
