import { NavLink } from 'react-router-dom'

const Navbar: React.FC = () => {
  const btnStyle = 'btn btn-ghost normal-case text-xl'
  const activeStyle = btnStyle.concat(' text-slate-50')
  const getClass = (isActive: boolean) => isActive ? activeStyle : btnStyle

  return (
    <div className="navbar bg-base-300">
      <NavLink className={({ isActive}) => getClass(isActive)} to="/">
        IDE
      </NavLink>
      <NavLink className={({ isActive }) => getClass(isActive)}to="/practice">
        Practice
      </NavLink>
    </div>
  )
}

export default Navbar
