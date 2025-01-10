import Image from "next/image";
import Link from "next/link"
import kentPic from "@/public/images/home/kody_onewheeling_flying_red.webp";

function Home() {
    return (
        <div className="flex items-center justify-center gap-3 p-3">
            <div className="flex flex-col gap-3 text-3xl lg:flex-row">
                <div className="flex pt-24 float-right">
                    <Image src={kentPic} className="float-right" alt="Kent C. Dodds" width={750} height={750} />
                </div>

                <div className="flex flex-col p-10 pt-24 items-center justify-center gap-5 lg:order-first">
                    <p className="text-5xl text-white py-10 line-clamp-4">
                        Helping people make the <br />
                        world a better place <br />
                        through quality software.
                    </p>
                    <Link href="/about" className="bg-white p-4 rounded-2xl text-black"> 
                        Read the blog 
                    </Link>
                    <Link href="/about" className="rounded-2xl p-4 border-spacing-1 border-black">
                        Take a course
                    </Link>
                </div>
                
                
            </div>

        </div>
    );
}

export default Home;

// kody_onewheeling_flying_red.webp