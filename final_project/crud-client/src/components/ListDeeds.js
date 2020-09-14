import React, {Fragment, useState, useEffect} from 'react';
import EditDeed from "./EditDeed";

const ListDeeds = ({deeds, setDeeds}) => {
   // const [deeds, setDeeds] = useState([]);

    // async function getDeeds(){
    //     const response = await fetch("http://localhost:3440/deeds");

    //     const deedArray = await response.json();
    //     console.log(deedArray);
    //     setDeeds(deedArray);
    // }

    // useEffect(()=>{
    //     getDeeds();
    // }, []);

    console.log(deeds);

    async function deleteDeed(id) {
        try {
            const res = await fetch(`http://localhost:3440/deed/${id}`,{
                method: "DELETE"
            });

        } catch (err) {
            console.error(err.message)
        }
        window.location.reload();
    }

    return (
        <Fragment>
              <table className="table mt-5">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Location</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {deeds.map(deed =>(
                    <tr key={deed.deeds_id}>
                        <td>{deed.title}</td>
                        <td>{deed.description}</td>
                        <td>{deed.category}</td>
                        <td>{deed.location}</td>
                        <td><EditDeed deed={deed}></EditDeed></td>
                        <td><button className="btn btn-danger" onClick={()=>deleteDeed (deed.deeds_id)}>Delete</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </Fragment>
    )
}

export default ListDeeds;