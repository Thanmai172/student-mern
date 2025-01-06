import { useState } from "react";

import "./StudentForm.css";

function StudentForm() {
    // create the state to hold the name, age adn course
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [course, setCourse] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const student = { name, age, course };

        try {
            // calling the api using the fetch 
            const res = await fetch("https://student-mern-2.onrender.com/api/students", {
                method: "POST",
                headers: {
                    "content-Type": "application/json",

                },
                body: JSON.stringify(student)
            });
            if (res.ok) {
                const data = await res.json();
                console.log(data);
                //clearing the form fields after submission
                setName('');
                setAge('');
                setCourse('');
            } else {
                console.log("failed to submit")
            }

        } catch (error) {
            console.log(error.message)
        }
    }


    return (

        <form onSubmit={handleSubmit} className="student-form">
            <h2>Add the Student to the Database</h2>
            <input
                type="text"
                placeholder="Enter the Student Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />

            <input
                type="number"
                placeholder="Enter the Student Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
            />

            <input
                type="text"
                placeholder="Enter the Student course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                required
            />
            <button type="submit">submit</button>


        </form>
    )


}


export default StudentForm