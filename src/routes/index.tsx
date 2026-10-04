import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import foodAsset from "@/assets/nutrition-bowl.png.asset.json";
import portraitAsset from "@/assets/about-portrait.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anna Wysocka — Dietetyk kliniczny" },
      { name: "description", content: "Anna Wysocka, dietetyk kliniczny. Indywidualne plany żywieniowe i konsultacje." },
      { property: "og:title", content: "Anna Wysocka — Dietetyk kliniczny" },
      { property: "og:description", content: "Indywidualne plany żywieniowe i konsultacje z Anną Wysocką." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="reference-page">
      <section className="reference-frame" aria-label="Anna Wysocka — Dietetyk kliniczny">
        <header className="reference-header">
          <p className="reference-wordmark">Anna Wysocka</p>
          <nav className="reference-nav" aria-label="Nawigacja główna">
            <Button variant="frameNav">O mnie</Button>
            <Button variant="frameNav">Współpraca</Button>
          </nav>
          <div className="reference-account">
            <Button variant="frameNav" className="reference-login">Login</Button>
            <Button variant="frameSignup">Sign up</Button>
          </div>
        </header>
        <div className="reference-copy">
          <h1 className="reference-title">Anna Wysocka</h1>
          <p className="reference-subtitle">Dietetyk kliniczny</p>
          <p className="reference-description">Get your custom plans &amp;<br />one-on-one guidance from our experts</p>
          <Button variant="frameAppointment">Umów wizytę</Button>
        </div>
        <img className="reference-food" src={foodAsset.url} width="941" height="677" alt="Miska z awokado, groszkiem, warzywami i grzybami" />
      </section>
      <section className="about-frame" aria-labelledby="about-title">
        <h2 id="about-title" className="about-title">O MNIE</h2>
        <div className="about-copy">
          <p className="about-description">Our team of expert nutritionists is here to help you achieve your health and wellness goals. Our nutritionists are highly trained and qualified professionals with a deep understanding of the science behind nutrition and how it can impact your body and mind</p>
          <ul className="about-credentials">
            <li>Registered Dietitian with the Academy of Nutrition and Dietetics</li>
            <li>5+ years of experience in the field</li>
            <li>Specialize in weight management, chronic disease prevention, and sports nutrition</li>
            <li>Skilled in developing recipes and meal plans.</li>
            <li>Passionate about helping people live healthy, fulfilling lives</li>
            <li>Committed to staying up-to-date with the latest research and trends in nutrition</li>
          </ul>
        </div>
        <img className="about-portrait" src={portraitAsset.url} width="770" height="683" alt="Uśmiechnięta kobieta w jeansowej kurtce" />
        <div className="about-dots" aria-hidden="true"><span /><span /><span /></div>
      </section>
    </main>
  );
}
