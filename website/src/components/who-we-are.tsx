"use client";

import { Gabarito } from "next/font/google";
import Image from "next/image";
import { cn } from "@/src/lib/utils";
import { BodyText } from "@/src/components/ui/typography";
import { Button } from "@/src/components/ui/button";

const font = Gabarito({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const teamMembers = [
  {
    name: "Phil Quinlan",
    title: "Director",
    image: "/images/phil.png",
    alt: "Phil Quinlan",
    linkedinUrl: "https://www.linkedin.com/in/phil-quinlan-b359a2b/",
    bio: "Phil has spent his career turning research ambition into infrastructure that actually ships. He's a Professor at the University of Nottingham and Honorary Director of Digital Health Research at Nottingham University Hospitals NHS Trust.",
  },
  {
    name: "Andy Rae",
    title: "Director",
    image: "/images/andy.jpg",
    alt: "Andy Rae",
    linkedinUrl: "https://www.linkedin.com/in/andyraeio/",
    bio: "Andy builds the software that turns policy into practice. He's a Senior Software Engineer at the University of Nottingham and Honorary Head of Research Software at Nottingham University Hospitals NHS Trust.",
  },
];

export const WhoWeAre = () => {
  return (
    <section id="who-we-are" className="py-32 px-6 lg:px-8 border-b border-white">
      <div className="mx-auto max-w-5xl">
        <p className={cn("text-[#14b8a6] uppercase tracking-widest text-sm font-semibold mb-12", font.className)}>
          Meet the Directors
        </p>

        <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-6", font.className)}>
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="rounded-xl p-8 bg-white/5 border border-white/10 hover:border-white/20 transition-colors text-center md:text-left"
            >
              <div className="flex flex-col items-center md:items-start">
                <div className="relative w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-white/10 mb-6">
                  <Image
                    src={member.image}
                    alt={member.alt}
                    fill
                    className="object-cover"
                    sizes="160px"
                  />
                </div>
                <h3 className="text-white text-2xl font-semibold mb-1">{member.name}</h3>
                <p className="text-[#14b8a6] font-medium mb-4">{member.title}</p>
                <p className="text-white/80 leading-relaxed mb-6">{member.bio}</p>
                <Button className="bg-[#14b8a6] text-white hover:bg-[#14b8a6]/90" asChild>
                  <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer">
                    View LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <BodyText className={cn("mt-16 text-white/80 max-w-3xl text-left", font.className)}>
          Together, they&apos;re recognised leaders in the complexity of data sovereignty, data
          standards, and how to put data to work safely at scale &mdash; built from years inside the
          University of Nottingham and Nottingham University Hospitals NHS Trust, on programmes with
          Health Data Research UK, NIHR Nottingham Biomedical Research Centre and Data and Analytics
          Research Environments UK.
        </BodyText>

        <BodyText className={cn("mt-6 text-white/80 max-w-3xl text-left", font.className)}>
          This isn&apos;t theoretical. Bunny, their open-source software, is already running inside
          the NHS England Secure Data Environment Programme &mdash; helping standardise and adopt new
          platforms in collaboration with industry and academic developers, and delivering a step
          change in capability at Nottingham University Hospitals. It&apos;s deployed, in production,
          inside one of the most secure environments in the NHS.
        </BodyText>
      </div>
    </section>
  );
};
