import { FaLinkedin, FaInstagram, FaDownload, } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';
import { CgFileDocument } from "react-icons/cg";

const NavBar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h1 className='mx-2 text-[28px] font-semibold'>VC</h1>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://upwork.com" target="_blank" rel="noopener noreferrer">
          <SiUpwork />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a
          href="/Cosminv.pdf"  // Ensure the CV is in the public folder
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-blue-300 text-2xl"
        >
          <CgFileDocument /> {/* Download Icon */}
          <span className='text-sm'>Resume</span>
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
