import React, { useState } from "react";
import "./user.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UserProfileDetail = props => {
  const [user, setUser] = useState(props.location.state.user);

  const toggleFriendship = e => {
    let _user = { ...user, isFriend: !user.isFriend };
    setUser(_user);
    e.stopPropagation();
  };

  let imageWrappedStyleClass = "image-profile";
  if (user.isFriend) imageWrappedStyleClass += " border-orange";

  return (
    <>
      {user && (
        <div className='profile-wrapper'>
          <div className='profile-card'>
            <div className='left-side'>
              <div className='panel-info'>
                <h3>Informacion</h3>
                <div className='inf'>
                  <div className='item'>
                    <h5>Nombre</h5>
                    <p>{user.name}</p>
                  </div>
                  <div className='item'>
                    <h5>Ciudad</h5>
                    <p>{user.address.city}</p>
                  </div>
                </div>
              </div>
              <div className='panel-info'>
                <h3>Trabajo Actual</h3>
                <div className='inf'>
                  <div className='item'>
                    <h5>Compañía</h5>
                    <p>{user.company.name}</p>
                  </div>
                  <div className='item'>
                    <h5>Puesto</h5>
                    <p>{user.company.catchPhrase}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='right-side'>
              <div
                className={imageWrappedStyleClass}
                style={{
                  backgroundImage: "url('" + user.profileImage + "')",
                }}
              ></div>
              <h4>{user.name}</h4>
              {user.isFriend && <p className='friendship'>Es mi amigx!</p>}
              <FontAwesomeIcon
                id='fai'
                icon={["fas", "user-plus"]}
                transform='shrink-8 up-.5'
                mask={["fas", "circle"]}
                className={user.isFriend ? "friend-style" : "non-friend-style"}
                size='3x'
                onClick={e => toggleFriendship(e)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserProfileDetail;
