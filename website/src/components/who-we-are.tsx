"use client";

import { Gabarito } from "next/font/google";
import Image from "next/image";
import { Plus } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { Heading, BodyText } from "@/src/components/ui/typography";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog";

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
    bio: "Phil is a Professor at the University of Nottingham and an honorary Director of Digital Health Research at Nottingham University Hospitals NHS Trust. He specialises in developing strategic interventions to assist organisations in making the best use of their data. Most recently this is in leading national and international programmes seeking to utilise federated technologies. With a background in software development, complemented with the understanding for how secure environments and the NHS seek to make such technology operational, it has led to many impactful interventions. ",
  },
  {
    name: "Andy Rae",
    title: "Director",
    image: "/images/andy.jpg",
    alt: "Andy Rae",
    linkedinUrl: "https://www.linkedin.com/in/andyraeio/",
    bio: "Andy builds software to support health research - designing, developing, and delivering tools that help people work more effectively with data, systems, and each other. He leads a software team at the Centre for Health Informatics at the University of Nottingham, and is also the Head of Research Software at Nottingham University Hospitals.",
  },
];

export const WhoWeAre = () => {
  
  return (
    <section id="who-we-are" className="py-32 px-6 lg:px-8 border-b border-white">
      <div className="mx-auto max-w-5xl">
        <div className={cn("text-left mb-12", font.className)}>
          <Heading className="text-5xl md:text-4xl mb-8 text-black">
            Our Directors
          </Heading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {teamMembers.map((member) => (
            <Dialog key={member.name}>
              <DialogTrigger asChild>
                <div className="relative group cursor-pointer overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-shadow max-w-xs">
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
                    <div className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Plus className="w-6 h-6 text-gray-900" />
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="text-2xl text-gray-900 dark:text-white">
                    {member.name}
                  </DialogTitle>
                  <DialogDescription className="text-base text-gray-600 dark:text-slate-300">
                    {member.title}
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-4">
                  <p className="text-gray-700 dark:text-slate-300 leading-relaxed">
                    {member.bio}
                  </p>
                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View LinkedIn Profile →
                  </a>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

