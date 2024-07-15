import Hero from "@/components/Hero";
import scaleImg from "public/scale.jpg";

export default function scalePage() {
   return (<Hero 
        imgData={scaleImg}
        imgAlt="welding"
        title="Scale your app to infinity"
      />) ;
}