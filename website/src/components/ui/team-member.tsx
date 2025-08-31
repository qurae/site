interface TeamMemberProps {
  name: string;
  image: string;
  alt: string;
  linkedinUrl: string;
}

export const TeamMember = ({ name, image, alt, linkedinUrl }: TeamMemberProps) => (
  <div className="flex flex-col items-center">
    <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
      <img 
        src={image} 
        alt={alt} 
        className="w-16 h-16 rounded-full filter grayscale hover:filter-none transition-all duration-300 border-2 border-slate-400 dark:border-gray-700" 
      />
    </a>
    <p className="text-slate-300 text-xs mt-2 leading-relaxed mb-8 text-center">
      {name}
    </p>
  </div>
);
