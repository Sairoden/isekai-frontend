import "./loading.css";

const Loading = () => {
  return (
    <div className="loading-wrapper">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="shadow"></div>
      <div className="shadow"></div>
      <div className="shadow"></div>
      <span>Loading</span>
    </div>
  );
};

export default Loading;
