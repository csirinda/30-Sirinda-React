import Navbar from "../components/Navbar";

export default function Owner() {
  return (
    <div>
        <Navbar />
        <div>
            <h1 className="text-center text-4xl font-bold my-6">Mine - Group F -30</h1>
            <div className="flex justify-center">
                <img src="https://nypost.com/wp-content/uploads/sites/2/2019/09/tv-scooby-doo-2b.jpg?resize=844,589&quality=75&strip=all"
                    alt="profile"
                    className="w-1/3 mb-6"/>
            </div>
            <div className="flex flex-col items-center">
                <h3 className="font-bold mb-6">Short Biography:</h3>
                <p className="w-3/5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo laboriosam voluptatibus veritatis atque voluptates, esse quasi. Temporibus eius eaque sequi, debitis ex velit quod exercitationem, iste aut suscipit repellat sint.</p>
            </div>
        </div>
    </div>
  )
}
