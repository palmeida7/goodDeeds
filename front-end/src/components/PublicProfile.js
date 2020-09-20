import React, { useState, useEffect } from 'react';
import RatingBadge from './Rating/RatingBadge';
import InputRating from './Rating/InputRating';

const PublicProfile = (props) => {
    const [profileData, setProfileData] = useState({});
    const [profileLoaded, setProfileLoaded] = useState(false);
    const [refreshRating, setRefreshRating] = useState(false);

    async function getProfileInfo() {
		const resp = await fetch(`http://localhost:5000/user_profile/${props.match.params.email}`)
		const userInfo = await resp.json();
        setProfileData(userInfo);
        setProfileLoaded(true);
	};

    useEffect(() => {
        getProfileInfo();
    }, []);

    const ratingAdded = () => {
        setRefreshRating(!refreshRating);
    };

    if (!profileLoaded) {
        return <div>Loading ...</div>;
    }

    return (
        <section key={profileData.email}>            
            <div className="container">
                <section className="section">
                    <div className="container">
                        {/* button : save & continue */}
                        <button className="button is-light is-pulled-right is-hidden">
                            Save & Continue
                        </button>
                        {/* screen title */}
                        <h1 className="title is-size-1">Public Profile</h1>
                    </div>
                    {/* second column */}
                    {/* user info */}
                    <section>
                        <div className="columns">
                            <div className="column mt-6">
                                <figure className="image is-480x480 is-1by1">
                                    <img src="https://i.imgur.com/EPqZ9Ic.png" alt="users avatar" />
                                </figure>
                            </div>
                            {/* Avatar & User Info */}
                            <div className="column mt-6">
                                <div className="container">
                                    <article className="media">
                                        <figure className="media-left">
                                            <p className="image is-48x48">
                                                <img
                                                    className="is-rounded"
                                                    src={profileData.picture}
                                                />
                                            </p>
                                        </figure>
                                        {/* user full name */}
                                        <div className="media-content">
                                            <div className="content">
                                                <p>
                                                    <strong className="title">{profileData.name}</strong> <br />
                                                    <small>@{profileData.username}</small> <br />
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                {/* Interest Areas */}
                                <label className="label mt-2">Interest Areas</label>
                                <div className="tags has-addons">
                                    <span className="tag is-warning">Seniors</span>
                                    <br />
                                    {/* <a className="tag is-delete mr-2"></a> */}
                                    <span className="tag is-black">Black Lives Matter</span>
                                    <br />
                                    {/* <a className="tag is-delete mr-2"></a> */}
                                    <span className="tag is-primary">LBGTQ</span>
                                    <br />
                                    {/* <a className="tag is-delete mr-2"></a> */}
                                </div>
                                {/* location */}
                                <h3>
                                    <strong>Location</strong>
                                </h3>
                                <h4>{profileData.location}</h4>
                                {/* short bio */}
                                <h3 className="mt-4">
                                    <strong>Short Bio</strong>
                                </h3>
                                <h4>
                                    {profileData.short_bio}
                                </h4>
                                {/* GoodDeed Rating */}
                                <h3 className="mt-4">
                                    <strong>GoodDeed Rating</strong>
                                </h3>
                                {/* <span className="tag is-success is-large">100%</span> */}
                                <RatingBadge userId={profileData.id} badgeSize="is-large" refreshRating={refreshRating}></RatingBadge>
                                {/* Rate this User */}
                                <InputRating userId={profileData.id} onRated={ratingAdded}></InputRating>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </section>
    );
};

export default PublicProfile;