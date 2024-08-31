import { DownloadShow } from "../downloadshow/downloadShow";
import Faq from "../faq/faq";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { KidsProfile } from "../kidsprofile/kidsProfile";
import { Main } from "../main/main";
import { Tv } from "../tv/tv";
import { WatchEveryWhere } from "../watcheverywhere/watcheverywhere";
import "./home.css";

export function Home() {
  return (
    <>
      <div className="bg-image">
        <div className="bg-shade">
          <Header />
          <Main />
        </div>
      </div>
      <div>
        <Tv />
        <DownloadShow />
        <WatchEveryWhere />
        <KidsProfile />
        <Faq />
        <Footer />
      </div>
    </>
  );
}
