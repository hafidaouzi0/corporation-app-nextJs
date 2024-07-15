import Hero from "@/components/Hero";
import Image from "next/image";
import homePage from "public/home.jpg"


export default function Home() {
  return <div>
    <Hero imgData={homePage} imgAlt="factory car" title="Professional Cloud Hosting"/> 
    
    Home Page</div>;
}
