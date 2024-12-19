import "../globals.css";

export default function Content() {
  return (
    <main className="flex">
      <div className="main-content">
        <div className="main-text">
          <h1>Essential Vitamins</h1>
        </div>
        <div className="content">
          <div className="info1">
            <h3>Online Medical Supplies</h3>
            <h4>
              Get Your Vitamins<br></br>& Minerals
            </h4>
            <button className="exlpore-btn"> Explore</button>
          </div>
          <div className="TabletBoxImg">
            <img src="/images/tablet_box.png" alt="Image" loading="lazy" />
          </div>
          <div className="info2">
            <div>
              <img src="/images/vitImg.png" alt="Image" loading="lazy" />
              <h3>
                Vitamins<br></br>
                <span>Increased Vitamins and</span> <br></br>
                <span>minerals in your diet</span>
              </h3>
              <h4></h4>
            </div>
            <div>
              <img src="images/weightImg.png" alt="Image" loading="lazy" />
              <h3>
                Weight Loss<br></br>
                <span>Weight Loss</span> <br></br>
                <span>Find Scientifically proven solutions</span>
              </h3>
              <h4></h4>
            </div>
            <div>
              <img src="/images/foodImg.svg" alt="Image" loading="lazy" />
              <h3>
                Functional Foods<br></br>
                <span>Functional Foods</span> <br></br>
                <span>From protein powers to baby formula</span>
              </h3>
              <h4></h4>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
