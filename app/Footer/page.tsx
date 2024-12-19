import "../globals.css";
import "../responsive.css";

export default function Footer() {
  return (
    <footer className="p-4 text-white ">
      <div className="footer-main">
        <div className="footer-info1">
          <div className="phone">
            <img src="/images/phone.png" className="Image" loading="lazy" />
            <h3>
              Phone Number<br></br>+97431181843
            </h3>
          </div>
          <div className="email">
            <img src="/images/email.png" className="Image" loading="lazy" />
            <h3>
              Email Address<br></br>Elbrithcqhr@gmail.com
            </h3>
            <h2></h2>
          </div>
          <div className="location">
            <img src="/images/location.png" className="Image" loading="lazy" />
            <h3>
              Office location<br></br>Ambassador Street, Zone 61,
            </h3>
          </div>
        </div>
        <div className="footer-info2">
          <img src="/images/logo2.png" alt="Logo" loading="lazy" />
          <p>
            Your health,physical and emotional well-geingis important<br></br>
            to us. We are always by your side and have made it even<br></br>
            easier for you to find the necessary vitamins.
          </p>
        </div>
        <div className="footer-final">
          <img
            src="/images/location2.png"
            className="locationImg"
            loading="lazy"
          />
          <p>
            Elbrit Life Sciences Private Limited,C20,BKC,G BLOCK,MUMBAI 400051
          </p>
        </div>
      </div>
    </footer>
  );
}
