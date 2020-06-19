import React from "react"

const LoadingContext = React.createContext({
  isLoading: true,
  setIsLoading: () => {}
})

export const LoadingContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = React.useState(true)
  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        setIsLoading
      }}
    >
      {children}
    </LoadingContext.Provider>
  )
}

export default LoadingContext
