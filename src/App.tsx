import { useState } from 'react'
// import { Button } from "antd"
// import { UpCircleOutlined } from "@ant-design/icons"
import { useRoutes, Outlet, Link } from "react-router-dom"
import router from "./router"
function App() {
  const [count, setCount] = useState(0)
  const outlet = useRoutes(router)
  return (
    <div className="App">
      {/* <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/user">User</Link> */}
      {/* <Outlet></Outlet> */}
      {outlet}
    </div>
  )
}

export default App
