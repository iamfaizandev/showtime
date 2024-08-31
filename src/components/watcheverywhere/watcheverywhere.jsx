import "./watcheverywhere.css";
import macVideo from "../../assets/tvview.mp4";
export function WatchEveryWhere() {
  return (
    <section className="watch_section">
      <div className="container-fluid watch_container ">
        <div className="mac_text">
          <div className="h1 watch_text">Watch everywhere</div>
          <div className="small_text">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </div>
        </div>
        <div id="mactv_container">
          <div className="monitor"></div>
          <video className="tv-video2" autoPlay playsInline muted loop>
            <source src={macVideo} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
