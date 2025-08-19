import '../styles/styles.css'

const Navbar = () => {
  return (
    <nav className="w-full px-4 py-2 border-b bg-slate-200 border-b-1 shadow-xl sticky top-0 zi-99">
      <div className="flex justify-between max-w-5xl mx-auto secondaryFont text-lg">
        {["About me", "Skills", "Projects", "Contacts"].map((item) => (
        <a href={`#${item.toLowerCase().replace(/\s/g, '-')}`} key={item} className="hover:underline">
          {item}
        </a>
      ))}
      </div>
    </nav>
  );
};

export default Navbar;
