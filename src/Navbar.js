import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="bg-gray-800 h-16 flex items-center justify-between px-4">
      {/* <Link to="/" className="site-title">
        Site Name
      </Link> */}
      <div className="flex">
      <ul className="flex">
      <CustomLink to="/" className="active text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Нүүр</CustomLink>
        <CustomLink to="/company" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Компани</CustomLink>
        <CustomLink to="/goods" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Бараа</CustomLink>
      </ul>
      </div>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}