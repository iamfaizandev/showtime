import "./kidsprofile.css";
import kidsPic from "../../assets/kids.png";

export function KidsProfile() {
  return (
    <section className="kidsprofile_section">
      <div className="container-fluid kids_container">
        <div className="kids_pic">
          <img src={kidsPic} alt="" />
        </div>
        <div className="kids_text">
          <div className="main_text h2">Create profiles for kids</div>
          <div className="small_text">
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </div>
        </div>
      </div>
    </section>
  );
}
