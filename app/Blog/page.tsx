import "../globals.css";
import "../responsive.css";

export default function Blog() {
  return (
    <div className="blog-main">
      <div className="blog-text">
        <h2>OUR BLOG</h2>
        <h1>Latest News</h1>
      </div>
      <div className="blog-images">
        <div className="imgset1">
          <div>
            <img
              src="/images/blogImg1.png"
              className="img1"
              alt="Image"
              loading="lazy"
            />
          </div>
          <div>
            <img
              src="/images/blogImg2.png"
              className="img2"
              alt="Image"
              loading="lazy"
            />
          </div>
        </div>
        <div className="imgset2">
          <div>
            <div>
              <img
                src="/images/blogImg1.png"
                className="img3"
                alt="Image"
                loading="lazy"
              />
            </div>
            <div>
              <img
                src="/images/blogImg1.png"
                className="img4"
                alt="Image"
                loading="lazy"
              />
            </div>
            <div>
              <img
                src="/images/blogImg1.png"
                className="img5"
                alt="Image"
                loading="lazy"
              />
            </div>
          </div>
          <div>
            <div>
              <img
                src="/images/blogImg2.png"
                className="img6"
                alt="Image"
                loading="lazy"
              />
            </div>
            <div>
              <img
                src="/images/blogImg2.png"
                className="img7"
                alt="Image"
                loading="lazy"
              />
            </div>
            <div>
              <img
                src="/images/blogImg2.png"
                className="img8"
                alt="Image"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
