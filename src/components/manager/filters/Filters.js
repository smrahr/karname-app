const Filter = () => {
  return (
    <div className="section-three-filters">
      <div className="filter">
        <h3 className="bg-yellow">فیلتر ...</h3>
      </div>
      <div className="filter manager">
        <table>
          <tr className="bg-gray-1">
            <td>امتیاز کل گروه</td>
            <td>132095</td>
          </tr>
          <tr>
            <td class="bg-gray">رتبه گروه در خبرگزاری</td>
            <td>1051.8</td>
          </tr>
          <tr>
            <td class="bg-gray">میزان بازدید از گروه</td>
            <td>1292.17</td>
          </tr>
          <tr>
            <td class="bg-gray">اغلاط املایی و انشایی در گروه</td>
            <td>120</td>
          </tr>
        </table>
      </div>
      <div className="filter">
        <table className="bg-gray-3">
          <tr className="bg-gray-3">
            <td>تراز کل</td>
            <td>254</td>
          </tr>
        </table>
      </div>
      <div className="filter">
        <table className="no-margin-border">
          <tr className="bg-gray-1 no-margin-border">
            <td>بدهکار</td>
            <td></td>
          </tr>
        </table>
      </div>
      <div className="filter">
        <table className="no-margin-border">
          <tr className="bg-gray-1 no-margin-border">
            <td>بستانکار</td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Filter;
