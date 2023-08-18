import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';

const SocialLinks = ()=> {
  return(
    <div className="d-flex gap-2 p-2 fs-3">
      <Nav.Link href="https://github.com/ria0-o">
        <FaGithub />
      </Nav.Link>
      <Nav.Link href="https://www.facebook.com/profile.php?id=100004499147855&mibextid=ZbWKwL">
        <FaFacebook />
      </Nav.Link>
      <Nav.Link href="https://www.instagram.com/ria0_o/">
        <FaInstagram />
      </Nav.Link>
    </div>
  );
};

export default SocialLinks;