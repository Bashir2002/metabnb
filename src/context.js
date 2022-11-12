import React, { useState, useContext, useEffect } from 'react'
// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [menu, setMenu] = React.useState(false)
  const [loading, setLoading] = React.useState(true)
  const [open, setOpen] = React.useState(false)

  const checkLoading = () => {}
  return (
    <AppContext.Provider
      value={{ menu, setMenu, loading, setLoading, open, setOpen }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
