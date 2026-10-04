import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import foodAsset from "@/assets/nutrition-bowl.png.asset.json";

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
    </main>
  );
}
