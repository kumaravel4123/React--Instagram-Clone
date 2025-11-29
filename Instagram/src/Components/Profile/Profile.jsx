import React, { useEffect, useState } from 'react'
import data from '../../assets/js/data';

function Profile() {

    const [profile, setProfile] = useState(null);
    const [followers, setFollowers] = useState([]);

    useEffect(() => {
        setProfile(data.profile);
        setFollowers(data.followers);
    }, []);

    function handleChange(e) {
        setProfile(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

    const handleUpdate = () => {
        console.log("Profile Updated Locally:", profile);
    };

    const handleUnfollow = (id) => {
        setFollowers(prev => prev.filter(f => f.id !== id));
    };


    return (
        <div className='m-5'>
            {profile ? (
                <div className='m-5'>
                    <img src={profile.profilePic} alt="profile_Pic" className='profile rounded-circle' />
                    <h5>{profile.username}</h5>

                    <input
                        type="text"
                        value={profile.username}
                        name='username'
                        className='form-control my-4'
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        value={profile.profilePic}
                        name='profilePic'
                        className='form-control my-4'
                        onChange={handleChange}
                    />

                    <button onClick={handleUpdate} className='btn btn-secondary my-4'>
                        Update
                    </button>
                </div>
            ) : (
                <div>Loading...</div>
            )}

            <h4>Followers</h4>

            {followers.length > 0 ? (
                followers.map(follower => (
                    <div key={follower.id} className='d-flex align-items-center my-2'>
                        <img src={follower.profilePic} width={40} height={40} className='rounded-circle me-2' />
                        <span className='me-3'>{follower.username}</span>
                        <button
                            className='btn btn-secondary'
                            onClick={() => handleUnfollow(follower.id)}
                        >
                            Unfollow
                        </button>
                    </div>
                ))
            ) : (
                <div>No Followers</div>
            )}
        </div>
    )
}

export default Profile;
