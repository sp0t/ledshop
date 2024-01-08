import React from 'react'
import MenuBar from '../navigations/MenuBar'
import Footer from '../navigations/Footer'

const Layout = (props) => {
  return(
    <React.Fragment>
      <MenuBar />

      <main>
        {props.children}
      </main>

      <Footer/>
    </React.Fragment>
  );
}

export default Layout;