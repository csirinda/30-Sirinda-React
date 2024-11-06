export default function UserSector({usersData}) {
  return (
    <div>
        { usersData.length > 0 && (
        <div className=" flex justify-center w-dvw ">      
            <table className="border-2 mt-20 w-3/5">
                <thead>
                    <tr>
                        <th className="border-2 p-2 w-1/3">Name</th>
                        <th className="border-2 p-2 w-1/3">Last Name</th>
                        <th className="border-2 p-2 w-1/3">Position</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {usersData.map(data => (
                        <tr key={data.id}>
                            <td className="border-2 p-2">{data.name}</td>
                            <td className="border-2 p-2">{data.lastname}</td>
                            <td className="border-2 p-2">{data.position}</td>
                            
                        </tr>
                            ))}
                </tbody>
            </table>     
        </div>
        )} 
    </div>
  )
}
