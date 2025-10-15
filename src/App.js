import React, { Suspense } from 'react'

// ** Router Import
import Router from './Router'

const App = () => {
  return (
    <Suspense fallback={null}>
      <Router />
    </Suspense>
  )
}

export default App
