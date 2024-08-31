import "./tv.css";
import video from "../../assets/tvview.mp4";

export function Tv() {
  return (
    <section id="tv" className="tv-section">
      <div className="container-fluid tv-container">
        <div className="left_text">
          <h3 className="main_text h1">Enjoy on your TV</h3>
          <h6 className="small_text">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </h6>
        </div>
        <div className="tv_right">
          <div className="tv-bg"></div>
          <video autoPlay loop muted className="tv-video">
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
