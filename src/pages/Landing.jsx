import LandingHeader from "../components/landing/Landingheader";
import LandingBody from "../components/landing/Landingbody";
import LandingFeatures from "../components/landing/Landingfeatures";
import LandingAction from "../components/landing/Landingaction";
import LandingFooter from "../components/landing/Landingfooter";

export default function Landing() {
  return (
    <main className="flex min-h-screen flex-col pt-20">
      <section className="flex flex-col items-center">
        <LandingHeader />
      </section>
      <section className="flex flex-col items-center pb-5">
        <LandingBody />
      </section>
      <section className="flex flex-col w-full">
        <LandingFeatures />
      </section>
      <section>
        <LandingAction />
      </section>
      <section className="flex flex-col w-full">
        <LandingFooter />
      </section>
    </main>
  );
}
