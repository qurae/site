import { Gabarito } from "next/font/google";
import { cn } from "@/src/lib/utils";
import { Heading, BodyText } from "@/src/components/ui/typography";
import { TeamMember } from "@/src/components/ui/team-member";
import { EmailLink } from "@/src/components/ui/email-link";

const font = Gabarito({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const teamMembers = [
  {
    name: "Phil Quinlan",
    image: "./images/phil.png",
    alt: "Phil Quinlan",
    linkedinUrl: "https://www.linkedin.com/in/phil-quinlan-b359a2b/",
    bio: "Phil is a Professor at the University of Nottingham and an honorary Director of Digital Health Research at Nottingham University Hospitals NHS Trust. He specialises in developing strategic interventions to assist organisations in making the best use of their data. Most recently this is in leading national and international programmes seeking to utilise federated technologies. With a background in software development, complemented with the understanding for how secure environments and the NHS seek to make such technology operational, it has led to many impactful interventions. ",
  },
  {
    name: "Andy Rae",
    image: "./images/andy.jpg",
    alt: "Andy Rae",
    linkedinUrl: "https://www.linkedin.com/in/andyraeio/",
    bio: "Andy builds software to support health research - designing, developing, and delivering tools that help people work more effectively with data, systems, and each other. He leads a software team at the Centre for Health Informatics at the University of Nottingham, and is also the Head of Research Software at Nottingham University Hospitals."
  },
];

export const Hero = () => {
  return (
    <div className="">
      <div className="mx-auto max-w-3xl">
        <div className={cn("text-left max-w-4xl mx-auto", font.className)}>
          <Heading>
            <span className="font-semibold">Qurae</span>
          </Heading>

          <BodyText>
            Something new is emerging from the University of Nottingham, led by
            the team that has delivered programmes with the NHS, Health Data
            Research UK, DARE UK, and the NIHR Nottingham Biomedical Research
            Centre.
          </BodyText>

          <BodyText>
            A rare opportunity to help shape the future direction of this
            emerging company.
          </BodyText>

          <BodyText>
            Get in touch today: <EmailLink email="hello@qurae.co.uk" />
          </BodyText>

          {/* Team Members */}
          <div className="mt-8">
            <h2 className="text-xl md:text-2xl text-white font-bold mb-8">Our Directors</h2>
            <div className="space-y-6 pb-8">
              {teamMembers.map((member) => (
                <TeamMember
                  key={member.name}
                  name={member.name}
                  image={member.image}
                  alt={member.alt}
                  linkedinUrl={member.linkedinUrl}
                  bio={member.bio}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
