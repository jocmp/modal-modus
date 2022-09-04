import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="h-screen bg-blue-100">
      <div className="md:container md:mx-auto">
        <div className="p-8">
          <Link className="underline" to="cards">
            Show cards
          </Link>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout;
