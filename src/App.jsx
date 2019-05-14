import React from 'react'
import './App.css'

import { Router } from '@reach/router'

import ListPage from './Pages'

export default () => (
  <>
    <Router>
      <ListPage path="/" />
    </Router>
  </>
)
