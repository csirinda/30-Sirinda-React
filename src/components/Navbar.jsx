import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div className="flex justify-end border-b-2">
        <ul className="flex p-5 gap-7">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/Owner">Owner</Link>
            </li>
        </ul>
    </div>
  )
}
