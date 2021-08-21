function Box(props) {
  const { style, content } = props;
  return (
    <div className={style}>
      <h1 className="box-title"> {content}</h1>
    </div>
  );
}

const element = (
  <div className="bg-container">
    <h1 className="main-heading">Boxes</h1>
    <div className="box-container row">
      <div className="box col-sm-12 col-md-3">
        <Box style="box-1" content="Small" />
      </div>
      <div className="box col-sm-12 col-md-4">
        <Box style="box-2" content="Medium" />
      </div>
      <div className="box col-sm-12 col-md-5">
        <Box style="box-3" content="Large" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
