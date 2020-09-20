import React, { useState, useEffect } from 'react';

const RatingBadge = ({ userId, badgeSize, refreshRating }) => {
    const [userRating, setUserRating] = useState(0);
    const [ratingLoaded, setRatingLoaded] = useState(false);

    async function getUserRatings() {
        const resp = await fetch(`http://localhost:5000/user/${userId}/ratings`);
        const ratingData = await resp.json();
        setUserRating(ratingData);
        setRatingLoaded(true);
    };

    useEffect(() => {
        getUserRatings();
    }, []);

    useEffect(() => {
        getUserRatings();
    }, [refreshRating]);

    if (!ratingLoaded) {
        return <span>Loading ...</span>;
    }

    return (
        <span className={`tag is-success ${badgeSize}`}>
            Rating: { userRating.rating }
        </span>
    )
}
export default RatingBadge;