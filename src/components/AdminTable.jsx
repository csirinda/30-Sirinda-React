export default function AdminTable({usersData, handleDelete}) {
  return (
        // ถ้า usersData ยังไม่มีข้อมูล ไม่ต้องแสดงตาราง
    <div>
        { usersData.length > 0 && (
        <div className=" flex justify-center ">      
            <table className="border-2 mt-16 w-full">
                <thead>
                    <tr>
                        <th className="border-2 p-2 w-1/4">Name</th>
                        <th className="border-2 p-2 w-1/4">Last Name</th>
                        <th className="border-2 p-2 w-1/4">Position</th>
                        <th className="border-2 p-2 w-1/4">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {usersData.map(data => (
                        <tr key={data.id}>
                            <td className="border-2 p-2">{data.name}</td>
                            <td className="border-2 p-2">{data.lastname}</td>
                            <td className="border-2 p-2">{data.position}</td>
                            <td className="border-2 p-2 text-center">
                                <button 
                                    onClick={() => handleDelete(data.id)}
                                    className="text-red-600"
                                    >Delete</button>
                            </td>
                        </tr>
                            ))}
                </tbody>
            </table>     
        </div>
        )}        
    </div>
  )
}
