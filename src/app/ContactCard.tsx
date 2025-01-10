import Image from "next/image";

interface SocialMediaProps {
  iconSrc: string;
  iconName: string;
  url: string;
}
interface ContactCardProps {
  socialMedia: SocialMediaProps;
}

export default function ContactCard({ socialMedia }: ContactCardProps) {
  return (
    <a href={socialMedia.url} target="_blank" className="no-underline">
      <div className="border-2 border-orange-950 rounded-lg mx-6 p-10 py-14 flex flex-col inline-flex items-center justify-center">
        <Image
          className=""
          src={socialMedia.iconSrc}
          alt={socialMedia.iconName}
          width={100}
          height={100}
        />
        <p className="text-center">{socialMedia.iconName}</p>
      </div>
    </a>
  );
}
