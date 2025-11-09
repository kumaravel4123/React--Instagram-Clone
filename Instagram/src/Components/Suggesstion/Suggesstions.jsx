import React, { useEffect, useState } from 'react'
import "./Suggesstions.css";
import "./Suggesstions.js"

function Suggesstions() {



    const [profile, setProfile] = useState(null);
    const [Suggesstion, setSuggesstions] = useState([]);

    const handleClick = (event) => {
        const btn = event.target;
        if (btn.innerText === "Follow") {
            btn.innerText = "Unfollow";
            btn.classList.remove("btn-primary");
            btn.classList.add("btn-secondary");
        } else {
            btn.innerText = "Follow";
            btn.classList.remove("btn-secondary");
            btn.classList.add("btn-primary");
        }
    };

    // For whole state follow btn

    //     const handleFollowToggle = (id) => {
    //     setSuggesstions(prev =>
    //       prev.map(user =>
    //         user.id === id
    //           ? { ...user, isFollowing: !user.isFollowing } // toggle follow state
    //           : user
    //       )
    //     );
    //   };



    useEffect(() => {

        fetch("http://localhost:3000/profile  ")
            .then(data => data.json())
            .then(data => setProfile(data))
            .catch(err => console.log(err))

        fetch("http://localhost:3000/suggesstions ")
            .then(data => data.json())
            .then(data => setSuggesstions(data))
            .catch(err => console.log(err))





    }, [])

    return (
        <div>
            <div className='suggesstions'>
                {/* Profile */}
                {profile ?
                    <div className='d-flex  my-3'>
                        <img className='dp rounded-circle' src={profile.profilePic} alt="" />
                        <h4>{profile.username}</h4>
                        <small className='ms-auto me-4 text-info'>Switch</small>
                    </div>
                    : <p>Loading</p>
                }
                <div className='d-flex'>
                    <h6>Suggested for you</h6>
                    <b className='ms-auto me-3'>See All</b>
                </div>

                {
                    Suggesstion.length > 0 ?
                        (
                            <div>
                                {Suggesstion.map((suggesstion) => (
                                    <div className="my-3" key={suggesstion.id}>
                                        <div className="d-flex">
                                            <img src={suggesstion.profilePic} alt="" className="dp rounded-circle" />
                                            <h5 className='mx-2 mt-2'>{suggesstion.username}</h5>
                                            <button onClick={handleClick} className='ms-auto btn btn-primary px-3'>Follow</button>
                                        </div>

                                    </div>
                                ))}
                            </div>


                        )

                        : <p>Loading</p>
                }

            </div>


        </div>
    )
}

export default Suggesstions

