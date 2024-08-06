import ContactUs from "@/components/ContactUs";
import { Hero } from "@/components/Hero";
import LandingPage from "@/components/landing-page";
import { PageWrapper } from "@/components/page-wrapper";

export default function Home() {
    return (
        <>
        <LandingPage />
        <PageWrapper>
        <Hero />
        </PageWrapper>
        </>
    )
}