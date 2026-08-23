export const Footer = () => {
  return (
    <footer className="py-10 px-6 md:px-16 bg-black border-t border-">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4 tracking-[0.1em]">
        <span className="font-serif">
          Velvet Roast
        </span>
        <p className="text-xs">
          © 2026 Velvet Roast Coffee · Portland, OR
        </p>
        <p className="text-xs">hello@velvetroast.com</p>
      </div>
    </footer>
  );
};