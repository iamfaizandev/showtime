import "./footer.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Form, InputGroup } from "react-bootstrap";
import TranslateIcon from "@mui/icons-material/Translate";

export function Footer() {
  const [faq, setFaq] = useState([{ title: "", link: "" }]);

  useEffect(() => {
    axios
      .get("footerfaq.json")
      .then((res) => {
        setFaq(res.data);
      })
      .catch((reason) => {
        console.log(reason.message);
      })
      .finally();
  }, []);

  return (
    <footer className="footer">
      <div className="container-fluid footer_container">
        <div className="footer_top">
          Questions? Call on <a href="callto:0008001008343">000-800-100-8343</a>
        </div>
        <div className="footer_body">
          <ul>
            {faq.map((list) => (
              <li key={list.title}>
                <a href={list.link}>{list.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer_bottom">
          <div className="btn">
            <InputGroup>
              <InputGroup.Text id="btnGroupAddon" className="bg_transparent ">
                <TranslateIcon />
              </InputGroup.Text>
              <Form.Select
                aria-label="Default select example"
                className="bg_transparent border border-start-0 "
              >
                <option value="English">English</option>
                <option value="हिंदी">हिंदी</option>
              </Form.Select>
            </InputGroup>
          </div>
        </div>
        <div className="brand_copyright ">ShowTime India</div>
      </div>
    </footer>
  );
}
