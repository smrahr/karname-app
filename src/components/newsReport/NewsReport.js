import ClickChart from "./ClickChart";
import SpeedChart from "./SpeedChart";
// import "./newsReport.css";
const NewsReport = () => {
  return (
    <div className="left-section">
      <div className="left-top-sec">
        
        {/* <ClickChart /> */}
        <div className="title-center-sec left">
          <h2>نرخ کلیک</h2>
          <h3>رتبه در خبرگزاری: 59</h3>
        </div>
      </div>
      <div className="left-bottom-sec">
        
        {/* <SpeedChart /> */}
        <div className="title-center-sec left">
          <h2>سرعت (تاخیر)</h2>
        </div>
        <div className="filter left-sec">
          <table>
            <tr>
              <td className="bg-gray">تعداد بازنشر</td>
              <td>15</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default NewsReport;
