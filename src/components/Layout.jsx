import { useState, useEffect } from 'react';
import Navbar from 'navigation/Navbar';
import Footer from 'navigation/Footer';
import { AppContent, IconButton } from './_Layout.jsx';

const Layout = ({ children }) => {
  const [showButton, setShowButton] = useState(false);

  const handleScrollButtonVisibility = () => {
    window.pageYOffset > 300
      ? setShowButton(true)
      : setShowButton(false)
  }

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScrollButtonVisibility);

    return () => {
      window.removeEventListener('scroll', handleScrollButtonVisibility);
    }
  }, [])

  return (
    <>
      <div className='App'>
        <Navbar />
        <AppContent>
          {children}
        </AppContent>
        <Footer />
      </div>
      {showButton && (
        <div className='scrollToTop'>
          <IconButton className='scrollToTop-button' onClick={handleScrollToTop}>
            <img src='/images/scrollToTop.png' alt='scroll to top' width='50px' />
          </IconButton>
        </div>
      )}
    </>
  )
}

export default Layout;
