
import AboutUsCards from "@/components/AboutUs";
import Avatar1 from "@/components/Avatar1";
import { Hero } from "@/components/Hero";
import LandingPage from "@/components/landing-page";

export default function Home() {
    return (
        <>
        <Hero/>
        <LandingPage/>
        <div className="w-full h-[600px]">
        <div className="p-5 text-center">
      <h1 className="text-3xl mb-5">About Us</h1>
      <p className="mb-10">This is the about us section of our website.</p>
      <div className="flex justify-center flex-wrap">
        <Avatar1 modelPath="/avatar1.glb" message="My name is Miten" />
        <Avatar1 modelPath="/avatar2.glb" message="My name is Alex" />
        <Avatar1 modelPath="/avatar3.glb" message="My name is Sam" />
        <Avatar1 modelPath="/avatar4.glb" message="My name is Taylor" />
      </div>
    </div>
        </div>
        </>
    )
}
