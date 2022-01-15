import React from 'react';
import { useSelector } from 'react-redux';
// import '../css/userEsteem.css';

const UserEsteem = () => {
  const allUserInfo = useSelector((state) => state.auth.allUserInfo);
  return (
    <div>
      <div className='mini-navbar'>
        <span>
          <h3>User Input Info</h3>
        </span>
      </div>
      <div className='userEsteem-container'>
        {allUserInfo ? (
          allUserInfo.map((esteem) => <UserCard key={esteem._id} {...esteem} />)
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

const UserCard = ({
  fName,
  lName,
  email,
  phoneNumber,
  addressCity,
  addressLocation,
  zipCode,
  country,
  refSTEG,
  annualElecConsum,
  roofDimentionL,
  roofDimentionW,
  CreatedAt,
  roofImg,
}) => {
  // let d = new Date(CreatedAt);
  // let date = `${d.getDay()} - ${d.getMonth()} - ${d.getFullYear()}`;
  return (
    <div className='userEsteem-card'>
      <span className='userEsteem-info' style={{ margin: '0', paddingTop: '10px' }}>
        <h5>
          {fName} {lName}
        </h5>
        <p>Email: {email} </p>
        <p> Phone number:{phoneNumber} </p>
        <p>
          Full address: {addressCity}, {addressLocation},{zipCode}, {country}{' '}
        </p>
        <p>ref STEG: {refSTEG} </p>
        <p>Annual Consumption: {annualElecConsum}Kwh</p>
        <p>
          Roof dimention: {roofDimentionL}mx{roofDimentionW}m
        </p>
        <p>realised at : {CreatedAt} </p>
        {roofImg.map((img, index) => (
          <div>
            <a href={img}> image{index + 1} </a>
          </div>
        ))}
      </span>
    </div>
  );
};

export default UserEsteem;
