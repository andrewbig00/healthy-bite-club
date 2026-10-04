import { Button } from "@/components/ui/button";
import logo from "@/assets/footer-logo.png";
import facebook from "@/assets/footer-facebook.png";
import instagram from "@/assets/footer-instagram.png";
import twitter from "@/assets/footer-twitter.png";
import pinterest from "@/assets/footer-pinterest.png";
import youtube from "@/assets/footer-youtube.png";
import email from "@/assets/footer-email.png";

const primaryLinks = ["About us", "Features", "Blogs", "Food", "Recipes", "Reviews", "Sign in"];
const secondaryLinks = ["Terms & conditions", "Privacy policy", "Contact", "Cookie policy", "Support"];
const socialLinks = [
  { name: "Facebook", asset: facebook },
  { name: "Instagram", asset: instagram },
  { name: "Twitter", asset: twitter },
  { name: "Pinterest", asset: pinterest },
  { name: "YouTube", asset: youtube },
  { name: "Email", asset: email },
];

export function ReferenceFooter() {
  return (
    <footer className="reference-footer" aria-label="HealthyBite">
      <div className="footer-content">
        <img className="footer-logo" src={logo} width="348" height="80" alt="HealthyBite" />
        <nav className="footer-primary" aria-label="Footer navigation">
          {primaryLinks.map((label) => <Button key={label} variant="footerLink">{label}</Button>)}
        </nav>
        <nav className="footer-secondary" aria-label="Policies and contact">
          {secondaryLinks.map((label) => <Button key={label} variant="footerLink">{label}</Button>)}
        </nav>
        <div className="footer-divider" />
        <div className="footer-socials">
          {socialLinks.map(({ name, asset }) => (
            <Button key={name} variant="footerSocial" aria-label={name} title={name}>
              <img src={asset} width="84" height="87" alt="" />
            </Button>
          ))}
        </div>
        <p className="footer-copyright">© 2023 Cornea clinic PVT. LTD. All Rights Reserved.</p>
      </div>
    </footer>
  );
}