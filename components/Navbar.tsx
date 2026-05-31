export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm text-white p-4 z-50">
      <div className="max-w-7xl mx-auto flex justify-between">
        <span className="font-bold">Nina Hesse</span>

        <div className="flex gap-6">
          <a href="#experience">Experience</a>
          <a href="#technical">Technical</a>
        </div>
      </div>
    </nav>
  );
}