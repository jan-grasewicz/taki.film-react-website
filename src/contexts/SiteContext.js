import React, { createContext, useState, useEffect } from 'react'

export const SiteContext = createContext({})

const SiteContextProvider = ({ children }) => {
  const [links, setLinks] = useState({})
  const [aboutUs, setAboutUs] = useState('')
  const [showreel, setShowreel] = useState({})
  const [portfolio, setPortfolio] = useState([])

  const [error, setError] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`${process.env.PUBLIC_URL}/data.json`)
      .then(response => response.json())
      .then(data => {
        setLinks(data.links)
        setAboutUs(data.aboutUs)
        setShowreel(data.showreel)
        setPortfolio(data.portfolio)

        setError({})
        setLoading(false)
      })
      .catch(error => {
        setError(error)
        setLoading(false)
      })
  }, [])

  return (
    <SiteContext.Provider value={{ links, aboutUs, showreel, portfolio, loading, error }}>
      {children}
    </SiteContext.Provider>
  )
}

export default SiteContextProvider
