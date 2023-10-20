// import "./profile.css";

const Profile = ({ data }) => {
  return (
    <div className="profile">
      <div>
        <img src="./images/khabarnegar.jpg" className="profile-image" />
        <ul>
          <li>
            <h2> نام و نام خانوادگی : {data[0].fieldValue} </h2>
          </li>
          <li className="star">
            <p> رتبه خبرنگار: {data[1].fieldValue}</p>
          </li>
          <li>
            <p>
              حوزه خبرنگار: <b>{data[2].fieldValue}</b>
            </p>
          </li>
          <li>
            <p>
              کد پرسنلی: <b>{data[3].fieldValue}</b>
            </p>
          </li>
          <li>
            <p>
              دوره ارزیابی: <b> {data[5].fieldValue} </b>
            </p>
          </li>
          <li>
            <p>
              وضعیت عملکرد: <b>{data[7].fieldValue}</b>
            </p>
          </li>
          <li>
            <p>
              رتبه آثار برتر: <b>3</b>
            </p>
          </li>
          <li>
            <p>
              امتیاز: <b>50</b>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
