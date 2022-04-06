import eth1 from "../assets/eth1.png";
import eth2 from "../assets/eth2.png";

const Like = () => {
  return (
    <div className="like">
      <div className="container">
        <div className="content">
          <div className="image">
            <img src={eth1} alt="eth1" />
            <h2 className="title">An NFT like no other</h2>
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
            <img src={eth2} alt="eth2" />
            <h2 className="title">An NFT like no other</h2>
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
