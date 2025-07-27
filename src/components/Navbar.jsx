import '../styles/styles.css'

const Navbar = () => {
  return (
    <nav className="w-full px-8 py-4 border-b bg-blue-100">
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
