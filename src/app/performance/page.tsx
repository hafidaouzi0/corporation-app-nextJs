import Hero from "@/components/Hero";
import PerformanceImg from "public/performance.jpg";

export default function PerformancePage() {
  return(
    <Hero
    imgData={PerformanceImg}
    imgAlt="welding"
    title="we serve high performance applications" />);
}
