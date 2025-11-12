import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Profile() {

    const [profile, setProfile] = useState(null);

    const [followers, setFollowers] =useState([]);

    const [unfollow, setUnfollow] = useState(0);

    useEffect(() => {
        axios.get("http://localhost:3000/profile")
            .then(data => { (setProfile(data.data)); console.log(data) })
            .catch(err => console.log(err))

        axios.get("http://localhost:3000/followers")    
              .then(data => setFollowers(data.data))
              .catch(err => console.log(err))
    },[]);

    function handleChange(e){
        setProfile(
            prev => ({
               ...prev,
               [e.target.name] : e.target.value
            })
        )
    }

    const handleUpdate = async => (
         axios.put("http://localhost:3000/profile",profile)
         .then(console.log("Updated"))
         .catch(err => console.log(err))
    )

    const handleUnfollow = async (id)=>{
        axios.delete(`http://localhost:3000/followers/${id}`)
        .then(alert("Unfollowed"))
        .then(setUnfollow(!unfollow ))
        .catch(err => console.log(err))
    }


    return (
        <div className='m-5 '>
            {profile ? (
                <div className='m-5'>
                    <img src={profile.profilePic} alt="profile_Pic" className='profile rounded-circle' />
                    <h4>{profile.username}</h4>

                    <input type="text"
                               value={profile.username}
                               name='username'
                               className='form-control my-4'
                               onChange={handleChange} />

                    <input type="text"
                               value={profile.profilePic}
                               name='profile_pic'
                               className='form-control my-4'
                               onChange={handleChange} />

                    <button onClick={handleUpdate} className='btn btn-secondary my-4'>Update</button>           
                </div>
            ) : (
                <div>
                    Loading...
                </div>
            )}

            {followers.length > 0 ? (
                followers.map(follower => {
                    <div key={follower.id} className='d-flex'>
                          {follower.profilePic}
                          {follower.username}
                           <button className='btn btn-secondary ' onClick={()=>{handleUnfollow(follower.id)}}>UnFollow</button>
                    </div>
                })
            ) : (
                    <div>Loading...</div>
            )}
        </div>
    )
}

export default Profile