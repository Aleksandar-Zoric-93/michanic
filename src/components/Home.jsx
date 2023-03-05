import bg from "../assets/bg.mp4";

function Home() {
  return (
    <div className="home position-relative">
      <video className="videoTag" autoPlay loop muted height={"100%"}>
        <source src={bg} type="video/mp4" />
      </video>
      <div
        className="opacity-75 bg-dark position-absolute top-0 left-0 w-100 h-100"
        style={{ zIndex: 1 }}
      ></div>
    </div>
  );
}


export default Home;
