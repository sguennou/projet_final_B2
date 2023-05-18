import Link from "next/link"

function NavBar() {
  return (
    <ul className="flex justify-center text-2xl border-b-2 border-[#6DC6E3] py-12 bg-blue-300">
      <li>
        <Link className="navbar-link mx-40 font-bold" href="/">
          Accueil🏠
        </Link>
      </li>
      <li>
        <Link className="navbar-link mx-40 font-bold " href="/history">
          Historique📜
        </Link>
      </li>
    </ul>
  )
}

export default NavBar
