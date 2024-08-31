import "./downloadshow.css";
import moviepic from "../../assets/boxshot.png";
import downloadGif from "../../assets/download-icon.gif";
import mobilepic from "../../assets/mobile.jpg";

export function DownloadShow() {
  return (
    <section className="downloadShow_section">
      <div className="container-fluid downloadshow_container">
        <div className="text h3">
          Download your shows to watch offline
          <div className="small_text">
            Save your favourites easily and always have something to watch.
          </div>
        </div>
        <div className="mobile">
          <div className="mobile_container">
            <img src={mobilepic} alt="" className="mobile_pic" />
            <div className="small_card">
              <div className="card_left-item">
                <img src={moviepic} className="movie_pic" alt="" />
              </div>
              <div className="card_center-item">
                <div className="movie_text">Stranger Things</div>
                <div className="download_text text-primary">
                  Downloading....
                </div>
              </div>
              <div className="card_right-item">
                <img src={downloadGif} className="download_gif" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
