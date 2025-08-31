import { Gabarito } from "next/font/google";
import { cn } from "@/src/lib/utils";
import { Heading, BodyText } from "@/src/components/ui/typography";
import { TeamMember } from "@/src/components/ui/team-member";
import { EmailLink } from "@/src/components/ui/email-link";

const font = Gabarito({ weight: ["400", "500", "600", "700", "800", "900"], subsets: ["latin"] });

const teamMembers = [
  {
    name: "Professor Phil Quinlan",
    image: "./images/phil.png",
    alt: "Phil Quinlan",
    linkedinUrl: "https://www.linkedin.com/in/phil-quinlan-b359a2b/"
  },
  {
    name: "Andy Rae",
    image: "./images/andy.jpg",
    alt: "Andy Rae",
    linkedinUrl: "https://www.linkedin.com/in/andyraeio/"
  }
];

export const Hero = () => {
  return (
    <div className="px-6 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-32 lg:py-12">
        <div className={cn("text-left max-w-4xl mx-auto mt-32 mb-8", font.className)}>
          <Heading>
            <span className="font-semibold">Qurae</span>
          </Heading>
          
          <BodyText>
            Something new is emerging from the University of Nottingham, led by the team that has delivered 
            programmes with the NHS, Health Data Research UK, DARE UK, and the NIHR Nottingham Biomedical Research Centre.
          </BodyText>
          
          <BodyText>
            A rare opportunity to help shape the future direction of this emerging company.
          </BodyText>

          <BodyText>
            Get in touch today:{' '}
            <EmailLink email="hello@qurae.co.uk" />
          </BodyText>

          {/* Team Members */}
          <div className="flex flex-row gap-16 justify-center">
            {teamMembers.map((member) => (
              <TeamMember
                key={member.name}
                name={member.name}
                image={member.image}
                alt={member.alt}
                linkedinUrl={member.linkedinUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
