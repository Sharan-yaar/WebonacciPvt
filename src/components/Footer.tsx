import Instaicon from "../assets/icons/insta.svg";
import Xsocial from '../assets/icons/x-social.svg';



export const Footer = () => {
  return (
    <section id="Footer">
    <footer className="py-5 bg-black text-white/60 border-t border-white/20">
      <div className="container">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
            <div className="text-center">2024 Webonacci, Inc. All rights reserved.</div>
            <ul className="flex justify-center gap-2.5">
              <a><li><Xsocial /></li></a>
              <a href="https://www.instagram.com/webonacci_?igsh=b2p3YmllYWoxNGp3"><li><Instaicon /></li></a>
            </ul>
        </div>
    </div>
    </footer>
    </section>
  )
};
