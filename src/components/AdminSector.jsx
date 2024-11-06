import { useState } from "react"
import AdminTable from "./AdminTable";

export default function AdminSector({usersData, handleAddData, handleDelete}) {
    const [newUser, setNewUser] = useState({
        name:"",
        lastname:"",
        position:""
    })

    // function จัดการกับการเปลี่ยนแปลงข้อมูลใน input
    // รับข้อมูลจาก input ไปเก็บไว้ newUser
    const handleChange = (e) => {
        const { name, value } = e.target;                                          // name จะเก็บชื่อของ input (ซึ่งเราตั้งไว้ใน name attribute ของ input), value จะเก็บค่าที่ถูกป้อนใน input นั้น
        setNewUser(prev => ({ ...prev, id: usersData.length + 1, [name]: value })); //[name]: value จะเป็นการตั้งค่าคีย์ที่ชื่อว่า name (ซึ่งถูกดึงมาจาก input) ให้มีค่าเป็น value (ค่าที่ป้อนเข้าไป)
    }

    // function จัดการข้อมูลเมื่อกด Save (Submit)
    // เอา newUser ไปเก็บไว้ที่ array usersData (Home page) 
    const handleSubmit = (e) => {
        e.preventDefault()
        if (newUser.name && newUser.lastname && newUser.position){         // เงื่อนไขเมื่อใส่ข้อมูลครบทุกช่อง จึงจะส่งค่าไปเก็บ
            handleAddData(newUser)
            setNewUser({ id: null, name: "", lastname: "", position: "" }); // เคลียร์หลังจากบันทึก
        }        
    }

  return (
    <div>
         <div>
            <h2>Create User Here</h2>
                <div>
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text"
                            name="name" 
                            placeholder="Name"
                            value={newUser.name}
                            onChange={handleChange}
                        />                        
                        <input 
                            type="text"
                            name="lastname" 
                            placeholder="Last Name"
                            value={newUser.lastname}
                            onChange={handleChange} />
                        <input 
                            type="text"
                            name="position" 
                            placeholder="Position"
                            value={newUser.position}
                            onChange={handleChange}
                        />
                        <button type="submit">Save</button>
                    </form>
                </div>
                <AdminTable usersData={usersData} handleDelete={handleDelete} />               

         </div>
    </div>
  )
}
