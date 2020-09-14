import React, {Fragment, useState} from 'react';

const EditDeed = ({deed}) =>{
    //console.log(deed);
    const editDeed = async (id)=>{
        try {
            const body = { title, description, category, location };

            const response = await fetch(`http://localhost:3440/deed/${id}`,{
                method: "PUT",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            window.location.reload();

        } catch (err){
            console.error(err.message);
        }
    }

    const [title, setTitle] = useState(deed.title);
    const [description, setDescription] = useState(deed.description);
    const [category, setCategory] = useState(deed.category);
    const [location, setLocation] = useState(deed.location);
    return <Fragment>
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target={`#id${deed.deeds_id}`}>
      Edit Deed
    </button>
    
    <div class="modal" id={`id${deed.deeds_id}`}>
      <div class="modal-dialog">
        <div class="modal-content">
    
          <div class="modal-header">
            <h4 class="modal-title">Editing Deed</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>
    
          <div class="modal-body">
            <form>
                <input type="text" className="form control" value={title} onChange={e => setTitle(e.target.value)}></input>
                <input type="text" className="form control" value={description} onChange={e => setDescription(e.target.value)}></input>
                <input type="text" className="form control" value={category} onChange={e => setCategory(e.target.value)}></input>
                <input type="text" className="form control" value={location} onChange={e => setLocation(e.target.value)}></input>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-success" data-dismiss="modal" onClick={()=> editDeed(deed.deeds_id)}>Edit</button>
            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
          </div>
    
        </div>
      </div>
    </div></Fragment>
};

export default EditDeed;