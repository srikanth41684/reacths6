import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { store } from "./Details";



const Edit = () => {

    const [Name, setName] = useState('')
    const [Age, setAge] = useState('')
    const [Course, setCourse] = useState('')
    const [Batch, setBatch] = useState('')

    const [Student, setStudents] = useContext(store)


    const changeHandler = (e) => {
        setName(e.target.value);
    }

    const changeHandler2 = (e) => {
        setAge(e.target.value);
    }

    const changeHandler3 = (e) => {
        setCourse(e.target.value);
    }

    const changeHandler4 = (e) => {
        setBatch(e.target.value);
    }

    const submitHandler = () => {

        setStudents([...Student, {Name:Name, Age:Age, Course:Course, Batch:Batch, id:new Date().getTime().toString()}])

    }

    return(
        <div>
            <div>
                <div className="input-form">
                    <div className="input-name">
                        <label>Name :</label>
                        <input type='text' id='name' name='name' value={Name} onChange={changeHandler} />
                    </div>
                    <div className="input-age">
                        <label>Age :</label>
                        <input type='text' id='age' name='age' value={Age} onChange={changeHandler2}/>
                    </div>
                    <div className="input-course">
                        <label>Course :</label>
                        <input type='text' id='course' name='course' value={Course} onChange={changeHandler3}/>
                    </div>
                    <div className="input-batch">
                        <label>Batch :</label>
                        <input type='text' id='batch' name='batch' value={Batch} onChange={changeHandler4}/>
                    </div>
                </div>
            </div>
            <div>
                <Link className="link-cancel" to='/student'>Cancel</Link>
                <Link className="link-update" to='/student' onSubmit={submitHandler}>Update</Link>
            </div>
        </div>
    );
}

export default Edit;