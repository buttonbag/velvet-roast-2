export const Footer = () => {
  return (
    <footer className="py-10 px-6 md:px-16 bg-stone-800 border-t border-[#c8781a]/15">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <span className="font-serif text-[0.95rem] tracking-[0.1em] text-[#c8781a]">
          Velvet Roast
        </span>
        <p className="text-xs tracking-[0.06em] text-[#9a8878]">
          © 2026 Velvet Roast Coffee · Portland, OR
        </p>
        <p className="text-xs text-[#9a8878]">hello@velvetroast.com</p>
      </div>
    </footer>
  );
};