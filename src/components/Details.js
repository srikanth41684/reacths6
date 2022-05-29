import React, { createContext, useState } from "react";

export const store=createContext()


const Details = (props) => {


    const [students, setStudents] = useState([

        {
            "Name" : "Prashanth",
            "Age" : "21",
            "Course" : "CSS",
            "Batch" : "Novembar",
            "id" : "1"
        },

        {
            "Name" : "Raj",
            "Age" : "25",
            "Course" : "JavaScript",
            "Batch" : "Dec",
            "id" : "2"
        },

        {
            "Name" : "Karthik",
            "Age" : "13",
            "Course" : "HTML",
            "Batch" : "Jan",
            "id" : "3"
        },

        {
            "Name" : "Chandu",
            "Age" : "10",
            "Course" : "Html",
            "Batch" : "Feb",
            "id" : "4"
        },

        

    ])
    return(
        <div>
            
            <store.Provider value={[students, setStudents]}>
            
                {props.children}
            
            </store.Provider>
        </div>
    );
}

export default Details;