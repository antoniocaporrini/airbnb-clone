// Bisogna markare i componenti come client components perchè di default sono server components e ciò potrebbe comportare a problemi di hydration
'use client';

interface ContainerProps {
  children: React.ReactNode;
}

// Template che riutilizziamo per creare le pagine
const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div
      className="max-w-[2520px]
    mx-auto
    xl:px-20
    md:px-10
    sm:px-2
    px-4
    "
    >
      {children}
    </div>
  );
};

export default Container;
