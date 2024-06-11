import "bootstrap/dist/css/bootstrap.css";
import MyImage from "./Asset/Css/image/myimage.jpg"

function App() {
  console.log(MyImage);
  return (
    <div>
      <img src={MyImage}
        alt="pic"
        style={{ height: "150px", width: "150px" }} />
      <button className="btn btn-secondary">Click Me!..</button>
    </div>
  );
}



export default App;