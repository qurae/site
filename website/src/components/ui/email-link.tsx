interface EmailLinkProps {
  email: string;
  children?: React.ReactNode;
}

export const EmailLink = ({ email, children }: EmailLinkProps) => (
  <a 
    href={`mailto:${email}`} 
    className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors text-black dark:text-white font-semibold underline underline-offset-8"
  >
    {children || email}
  </a>
);
