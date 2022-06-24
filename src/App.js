import React from 'react'
import Home from './Components/Home'
import { Switch, Route } from 'react-router-dom'
import Wordpresstheme from './Components/Wordpresstheme'

import './style.css'
import Subcat from './Components/Subcat'
import Blog from './Components/Blog'
const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blog" component={Blog} />
        <Route
          exact
          path="/category/wordpresstheme"
          component={() => <Wordpresstheme cat={'wordpress'} />}
        />
        <Route
          exact
          path="/category/php"
          component={() => <Wordpresstheme cat={'php'} />}
        />
        <Route
          exact
          path="/category/ecommerce"
          component={() => <Wordpresstheme cat={'ecommerce'} />}
        />
        <Route
          exact
          path="/category/wordpressplugins"
          component={() => <Wordpresstheme cat={'wordpressplugins'} />}
        />
        <Route exact path="/subcategory/blog" component={Subcat} />
        <Route
          exact
          path="/subcategory/buddypress"
          component={() => <Subcat cat={'buddypress'} />}
        />
        <Route
          exact
          path="/subcategory/corporate"
          component={() => <Subcat cat={'corporate'} />}
        />
      </Switch>
    </>
  )
}

export default App
