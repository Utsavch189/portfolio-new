import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
          <span style={{color:"white"}}>{'<'} <img src={logo} alt="Logo" />{'/>'}</span>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/utsav-chatterjee-900887202/?fbclid=IwAR3VJjcqsBGOWrEcIVaCcHfBf0_sg52i63iPBSLA4bYu9ROGsBlJpQUd-aw"><img src={navIcon1} alt="" /></a>
                <a href="https://www.facebook.com/utsav.chatterjeexman?mibextid=ZbWKwL"><img src={navIcon2} alt="" /></a>
                <a href="https://github.com/Utsavch189"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Thank you for attention</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
