const NewsEvaluation = ({ data }) => {
  return (
    <div className="evaluation">
      {/* <progress style={{ accentColor: "#8E0303" }} value={data} title={data} /> */}
      <div className="eva-progress-background">
        <div className="eva-progress-bar" style={{ width: `${data}%` }}></div>
      </div>
    </div>
  );
};
export default NewsEvaluation;
