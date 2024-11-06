import { useState } from "react"
import Navbar from "../components/Navbar"

export default function Home() {
    const [showAdminSection, setShowAdminSection] =useState(false)
    const [showUserSection, setShowUserSection] = useState(false)

    const [usersData, setUsersData] = useState([])

    const handleAddData = (newUser) => {
        setUsersData([...usersData, newUser])
    }
    
  return (
    <div>
        <Navbar />
        <div className="flex flex-col items-center mt-16">
            <h1 className="text-4xl font-bold">Generation Thailand</h1>
            <h1 className="text-4xl font-bold">React - Assessment</h1>

            <div className="flex gap-20 mt-10">
                <button 
                    onClick={() => { 
                        setShowAdminSection(false)
                        setShowUserSection(true)
                    }}
                    className="border-2">User Home Sector
                </button>
                <button 
                    onClick={() => { 
                        setShowAdminSection(true)
                        setShowUserSection(false)
                    }}
                    className="border-2">Admin Home Sector
                </button>
            </div>
            <div>
                { showAdminSection && (
                    <div>
                    <h2>Create User Here</h2>
                    <div>
                        <form>
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                            <button type="submit">Save</button>
                        </form>
                    </div>
                    </div>
                )}                
            </div>
        </div>

    </div>
  )
}
