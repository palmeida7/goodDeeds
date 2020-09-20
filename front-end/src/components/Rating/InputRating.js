import React, { useState } from 'react';
const InputRating = ({ userId, onRated }) => {
    const [rating, setRating] = useState("");
    const [userRated, setUserRated] = useState(false);
    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { rating };
            await fetch(`http://localhost:5000/user/${userId}/rating`, {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(body)
            });
            setUserRated(true);
            onRated();
        } catch (err) {
            console.error(err.message);
        }
    }

    if (userRated) {
        return <div>User Rated!</div>
    }

    return (
        <>
            <form className="d-flex" onSubmit={onSubmitForm}>
                <div>
                    <div>
                        <label className="label">Rating 1-5: </label>
                        <div className="select">
                            <select type="text" className="form control" value={rating} onChange={e => setRating(e.target.value)}>
                                <option>--Select--</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </div>
                    <button className="button is-success margin-top-2">Add</button>
                </div>
            </form>
        </>
    )
}
export default InputRating; 