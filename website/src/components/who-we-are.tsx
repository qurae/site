"use client";

import { Gabarito } from "next/font/google";
import Image from "next/image";
import { cn } from "@/src/lib/utils";
import { Heading, BodyText } from "@/src/components/ui/typography";
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
    bio: "Phil is a Professor at the University of Nottingham and an honorary Director of Digital Health Research at Nottingham University Hospitals NHS Trust. ",
  },
  {
    name: "Andy Rae",
    title: "Director",
    image: "/images/andy.jpg",
    alt: "Andy Rae",
    linkedinUrl: "https://www.linkedin.com/in/andyraeio/",
    bio: "Andy is a Senior Software Engineer at the University of Nottingham and Honorary Head of Research Software at Nottingham University Hospitals NHS Trust.",
  },
];

export const WhoWeAre = () => {
  
  return (

    <section id="who-we-are" className="py-32 px-6 lg:px-8 border-b border-white">
      
      <div className="mx-auto max-w-5xl">
        <div className={cn("text-left mb-12", font.className)}>
          <Heading className="text-5xl md:text-4xl mb-8 text-white">
            Our Directors
          </Heading>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {teamMembers.map((member) => (
            <div key={member.name} className="relative overflow-hidden rounded-lg bg-white shadow-lg max-w-xs">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={member.image}
                  alt={member.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-lg opacity-90">{member.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className={`pt-16 px-6 lg:px-8`}>
          <div className="mx-auto max-w-5xl">

              <BodyText className="mb-8 text-white max-w-5xl text-left">
                  Our directors are international leaders in understanding the complexity between data sovereignty, data
                  standards
                  and the use of data in global analyses. This experience has come from working within the University of
                  Nottingham
                  and Nottingham University Hospitals NHS Trust on programmes with Health Data Research UK, NIHR
                  Nottingham
                  Biomedical Research Centre and Data and Analytics Research Environments UK.

              </BodyText>

            <div className={cn("text-left max-w-5xl", font.className)}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      {teamMembers.map((member) => (
                        <div key={member.name}>
                          <BodyText key={member.name} className="text-white">
                              {member.bio}

                          </BodyText>
                              <Button className="mt-6 bg-[#14b8a6] text-white hover:bg-[#14b8a6]/90" asChild>
                                <a
                                    href={member.linkedinUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View LinkedIn
                                </a>
                              </Button>
                        </div>
                      ))}
                  </div>
              </div>

               <BodyText className="mb-8 text-white max-w-5xl text-left">

                   Their successful partnership has delivered many impacts to the projects they run, including the
                   use of open-source software called Bunny in the NHS England Secure Data Environment Programme. Assisting
                   the adoption of standards by working collaboratively with industry and academic developers of technology
                   platforms to deliver a step change in capability in NUH. They combine exceptional technical knowledge
                   with first hand experience of deploying tools to transform research capability within secure environments.

              </BodyText>

          </div>
      </section>

    </section>
  );
};
