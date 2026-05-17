function Footer() {
  return (
    <footer className="border-t bg-white/60 backdrop-blur-md mt-10">
      <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Serene Spark — All rights reserved
      </div>
    </footer>
  );
}

export default Footer;