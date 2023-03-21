import Container from "../../widgets/Container";

const Dashboard = () => {
  return (
    <Container>
      <div className="flex justify-between items-center">
        <p className="font-semibold text-3xl">Dashboard</p>
        <div className="flex items-center gap-4">
          <img src={require("../../assets/images/logo.png")} alt="logo" width={86} />
          <div>
            <i>Transport Vehicle</i>
            <br />
            <i>Feasibility Inspection</i>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center h-full">
        <div className="flex flex-col bg-[#F1F4FD26] rounded-full py-12 px-2">
          <img src={require("../../assets/images/camera.png")} alt="camera" className="mx-2 my-8 hover:bg-black" width={36} />
          <img src={require("../../assets/images/info.png")} alt="info" className="mx-2 my-8 hover:bg-black" width={36} />
          <img src={require("../../assets/images/clock.png")} alt="clock" className="mx-2 my-8 hover:bg-black" width={36} />
        </div>
        <img src={require("../../assets/images/eye.png")} alt="eye" width={412} />
      </div>
    </Container>
  )
};

export default Dashboard;
