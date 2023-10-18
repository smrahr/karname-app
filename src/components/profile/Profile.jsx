// import "./profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <div>
        <img src="./images/khabarnegar.jpg" className="profile-image" />
        <ul>
          <li>
            <h2> نام و نام خانوادگی</h2>
          </li>
          <li className="star">
            <p>رتبه خبرنگار: </p>
          </li>
          <li>
            <p>
              حوزه خبرنگار: <b>سیاسی</b>
            </p>
          </li>
          <li>
            <p>
              کد پرسنلی: <b>3414</b>
            </p>
          </li>
          <li>
            <p>
              دوره ارزیابی: <b>13 اسفند 1398</b>
            </p>
          </li>
          <li>
            <p>
              وضعیت عملکرد: <b>مطلوب</b>
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
