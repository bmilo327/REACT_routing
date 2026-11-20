import { NavLink, Outlet } from 'react-router'

export default function Layout() {
  return (
    <>
    <header>
        <h1>Webáruház</h1>
    </header>
    <nav>
        <NavLink to="/">Publikus felület</NavLink>
        <NavLink to="/kosar">Kosár</NavLink>
        <NavLink to="/admin">Admin</NavLink>
    </nav>
    <main>
        <Outlet/>
    </main>
    <footer></footer>
    </>
  )
}
