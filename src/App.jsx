import { useEffect, useState } from 'react'
import EnvelopeIntro from './components/EnvelopeIntro.jsx'
import Home from './components/Home.jsx'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? '' : 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      <Home isOpen={isOpen} />
      {!isOpen && <EnvelopeIntro onOpen={() => setIsOpen(true)} />}
    </>
  )
}

export default App
