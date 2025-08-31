interface EmailLinkProps {
  email: string;
  children?: React.ReactNode;
}

export const EmailLink = ({ email, children }: EmailLinkProps) => (
  <a 
    href={`mailto:${email}`} 
    className="text-white font-semibold underline underline-offset-4"
  >
    {children || email}
  </a>
);
