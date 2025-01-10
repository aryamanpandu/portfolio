import ContactCard from "./ContactCard";

export default function ContactGallery() {
  return (
    <div>
      <ContactCard
        socialMedia={{
          iconSrc: "/icons8-linkedin-50.svg",
          iconName: "LinkedIn",
          url: "https://www.linkedin.com/in/aryaman-pandey-8a5711247/",
        }}
      />
      <ContactCard
        socialMedia={{
          iconSrc: "/icons8-github-50.svg",
          iconName: "GitHub",
          url: "https://github.com/aryamanpandu",
        }}
      />
      <ContactCard
        socialMedia={{
          iconSrc: "leetcode-svgrepo-com.svg",
          iconName: "LeetCode",
          url: "https://leetcode.com/u/pandu1234567/",
        }}
      />
    </div>
  );
}
