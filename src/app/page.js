
import HeroWrapper from "@/components/Hero/HeroWrapper";
import ServicesWrapper from "@/components/Services/ServicesWrapper";
import IndustryWrapper from "@/components/Industry/IndustryWrapper";
import ContactWrapper from "@/components/Contact/ContactWrapper";
import styles from "./page.module.css";

export default function Home() {

  return (
    <main className={styles.main}>

      {/* HERO SECTION - WITH GRID */}
      <div className={`${styles.heroWrapper}`}>
        <section className={styles.heroSection}>
          <HeroWrapper />
        </section>
      </div>

      {/* SERVICES SECTION */}
      <div className={`${styles.servicesWrapper}`} id="services">
        <section className={styles.servicesSection}>
          <ServicesWrapper />
        </section>
      </div>

      {/* Industry SECTION */}
      <div id="industry">
        <section>
          <IndustryWrapper />
        </section>
      </div>

      {/* Contact SECTION */}
      <div id="contact">
        <section>
          <ContactWrapper />
        </section>
      </div>
    </main>
  );
}