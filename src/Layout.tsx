import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="md:container md:mx-auto">
      <div className="m-8">
        <Link className="underline" to="cards">
          Show cards
        </Link>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout;
