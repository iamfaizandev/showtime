import axios from "axios";
import { useEffect, useState } from "react";
import "./pagefooter.css";

export function PageFooter() {
  const [faq, setFaq] = useState([{ title: "", link: "" }]);

  useEffect(() => {
    axios
      .get("pagefooter.json")
      .then((res) => {
        setFaq(res.data);
      })
      .catch((reason) => {
        console.log(reason.message);
      });
  }, []);

  return (
    <footer className="footer-bg">
      <div className="container-fluid">
        <div className="footer-container">
          <div className="footer-top mb-4">
            <span className="">
              Question? Call
              <a href="callto:000-800-919-1694"> 000-800-919-1694</a>
            </span>
          </div>
          <div className="footer-body">
            <ul className="footer-links">
              {faq.map((list, index) => (
                <li key={index}>
                  <a href={list.link}>{list.title}</a>
                </li>
              ))}
            </ul>
            <a
              href="https://mdfaizanahmad-portfolio-fzn.web.app/"
              className="text-decoration-underline text-primary"
            >
              Created by Md Faizan Ahmad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
