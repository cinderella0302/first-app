// import { redirect } from "next/navigation";
import Header from "../components/header";
import About from "./about/page";
import Home from "./home/page";

export default function Page() {
  return (
    <div className="main-wrapper relative bg-gray-700">
      <Home />
      <About />
    </div>
  )
  // redirect('/about');
}