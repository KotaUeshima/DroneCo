import React, { useEffect, useState } from 'react'
import Footer from './Footer.js'
import NavBar from './NavBar'

function Layout({ children }) {
  const [scrollUp, setScrollUp] = useState(true)
  const [topOfPage, setTopOfPage] = useState(true)
  let lastScroll = 0

  useEffect(() => {
    window.addEventListener('scroll', () => {
      let currentScroll = window.pageYOffset
      // further down the page you go higher the number

      if (lastScroll === 0) {
      } else if (currentScroll > lastScroll && scrollUp) {
        setScrollUp(false)
      } else if (currentScroll < lastScroll && !scrollUp) {
        setScrollUp(true)
      }

      if (currentScroll === 0 && !topOfPage) {
        setTopOfPage(true)
      } else if (currentScroll !== 0 && topOfPage) {
        setTopOfPage(false)
      }

      lastScroll = currentScroll
    })
  })
  return (
    <div>
      <NavBar scrollUp={scrollUp} topOfPage={topOfPage} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
