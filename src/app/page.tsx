// import { redirect } from "next/navigation";
import Header from "../components/header";
import About from "./about/page";

export default function Page() {
  return (
    <div className="main-wrapper relative">
      <About />
    </div>
  )
  // redirect('/about');
}