import egypt from "../assets/egypt.png";

const SignUp = () => {
  return (
    <div className="signup">
      <div className="container">
        <div className="content">
          <p className="sub-title">Launching Soon</p>
          <p className="title">Lorem ipsum dolor sit amet consectetur.</p>
          <p className="description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
            vitae sapiente deserunt sed reprehenderit nisi.
          </p>
          <button>Sign Up</button>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={egypt} alt="egypt" />
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
