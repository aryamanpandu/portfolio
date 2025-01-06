import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="flex items-center justify-center space-x-4 border-2 h-svh text-wrap">
      <div className="">
        <div className="flex items-center justify-center p-4 border-2 text-xl">
          Heyo
        </div>
        <div className="border-2 text-lg">
          I'm Aryaman Pandey, a Bachelor's of CS student at Dalhousie
          University. Other than Computer Science, I also enjoy working out as
          well as playing the guitar.
        </div>
      </div>
      <div className="border-2">
        <Image
          className=""
          src="/ownPhoto.jpg"
          alt="Picture of myself"
          width={400}
          height={100}
        />
      </div>
    </div>
  );
}
