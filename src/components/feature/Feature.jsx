import React from 'react'
import './feature.css'
import nav from '../../assets/nav.png'
import Sidebar from '../sidebar/Sidebar'
import SidebarRight from '../sidebar/Sidebarright'

const Feature = () => {
  return (
    <div className='main'>
      <Sidebar />
      {/* <div className='sidebar-r'><SidebarRight /></div> */}
      <div className = "container">
        <h1 className = "title">Title</h1>
        <p className = "info">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        <button className="btn">Add Quick Component</button>
        <h1 className = "title">Default Header</h1>
        <p className = "info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam quis enim lobortis scelerisque. Nam libero justo laoreet sit amet cursus. Netus et malesuada fames ac. Tempor orci eu lobortis elementum. Amet volutpat consequat mauris nunc congue nisi vitae suscipit. Nascetur ridiculus mus mauris vitae. In hendrerit gravida rutrum quisque non tellus orci ac. Vitae justo eget magna fermentum iaculis eu non. Blandit massa enim nec dui nunc mattis enim ut tellus. Dictumst vestibulum rhoncus est pellentesque elit. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Sit amet aliquam id diam maecenas ultricies mi. Amet mauris commodo quis imperdiet. Mi ipsum faucibus vitae aliquet nec. Laoreet id donec ultrices tincidunt arcu non sodales neque.</p>
        <button className="btn">Add Quick Component</button>
        <h1 className = "title">Default Header 2</h1>
        <p className = "info">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        <button className="btn">Add Quick Component</button>
      </div>
    </div>
  )
}

export default Feature