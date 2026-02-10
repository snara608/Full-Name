import { useState} from "react";


function Fullname() {

    const [ formData, setFormData] = useState({ firstName: "", lastName: "" });
    const [ fullName, setFullName ] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.firstName && formData.lastName ) {
            setFullName(`Full Name: ${formData.firstName} ${formData.lastName}`)
        }
    }


    return(
        <div className="container">
            <h1>Full Name Display</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name:</label>
                <input
                type="text"
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}   
                required             
                />
                </div>
                <div>
                    <label>Last Name:</label>
                <input
                type="text"
                value={formData.lastName}
                onChange={(e) => setFormData({...formData, lastName: e.target.value})} 
                required               
                />
                </div>
            <button type="submit">Submit</button>
            </form>
            { fullName && <p>{fullName}</p>}
        </div>
    )
}   

export default Fullname;