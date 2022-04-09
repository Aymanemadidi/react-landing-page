import london from "../assets/london.png";
import egypt from "../assets/egypt.png";
const Like = () => {
  return (
    <div className="like">
      <div className="container">
        <div className="content">
          <div className="image">
            <img src={london} alt="london" />
            <h2 className="title">Lorem ipsum dolor sit amet.</h2>
          </div>
          <p className="description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
            inventore iusto facere fugit totam cumque maxime culpa ipsum? Quidem
            sunt, beatae rem qui perferendis dolorum.
          </p>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
            dolor aspernatur excepturi est quis vitae tempore magni aliquid enim
            unde!
          </p>
        </div>
        <div className="content">
          <div className="image">
            <img src={egypt} alt="egypt" />
            <h2 className="title">Lorem ipsum dolor sit amet.</h2>
          </div>
          <p className="description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
            inventore iusto facere fugit totam cumque maxime culpa ipsum? Quidem
            sunt, beatae rem qui perferendis dolorum.
          </p>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
            dolor aspernatur excepturi est quis vitae tempore magni aliquid enim
            unde!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Like;
