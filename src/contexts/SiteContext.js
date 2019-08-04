import React, { createContext, useState, useEffect } from 'react'

export const SiteContext = createContext({})

const SiteContextProvider = ({ children }) => {
  const [showreel, setShowreel] = useState([])
  const [portfolio, setPortfolio] = useState([])
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data.json`)
      .then(response => response.json())
      .then(data => {
        setShowreel(data.showreel)
        setPortfolio(data.portfolio)
      })
    //clean up and error handle todo
    return () => {}
  }, [])

  return (
    <SiteContext.Provider value={{ portfolio, showreel }}>
      {children}
    </SiteContext.Provider>
  )
}

export default SiteContextProvider
