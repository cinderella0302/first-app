import Image from "next/image";
import Link from "next/link"
import kentPic from "@/public/images/home/kody_onewheeling_flying_red.webp";

function HeroSection() {
    return (
        <div className="flex items-center gap-3 p-3">
            {/* <div> */}
            <div className="container flex flex-col gap-3 text-3xl p-20 lg:flex-row">

                <div className="container pt-24">
                    <Image src={kentPic} className="float-right" alt="Kent C. Dodds" width={700} height={700} />
                </div>

                <div className="container flex flex-col p-10 items-center justify-center">
                    <p className="">
                        Helping people make the <br />
                        world a better place <br />
                        through quality software.
                    </p>
                    <Link href="/about" className="bg-white p-2 rounded-lg text-black gap-10"> 
                        Read the blog 
                    </Link>
                    <Link href="/about" className="rounded-lg border-spacing-1 border-black">
                        Take a course
                    </Link>
                </div>
                
            </div>
            {/* </div> */}
        </div>
    );
}

export default HeroSection;

// kody_onewheeling_flying_red.webp