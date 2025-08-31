interface TeamMemberProps {
  name: string;
  image: string;
  alt: string;
  linkedinUrl: string;
  bio: string;
}

export const TeamMember = ({ name, image, alt, linkedinUrl, bio }: TeamMemberProps) => (
  <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
    
  <div className="flex items-start gap-4">
    <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
      <img 
        src={image} 
        alt={alt} 
        className="w-20 h-20 rounded-full hover:filter-none transition-all duration-300 border-2 border-slate-400 dark:border-gray-700" 
        />
    </a>
    <div className="flex-1">
      <h3 className="text-white font-semibold mb-2">{name}</h3>
      <p className="text-sm text-slate-300 leading-relaxed">
        {bio}
      </p>
    </div>
  </div>
  </div>
);
