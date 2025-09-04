import { useState } from "react";

function Burger() {

  const [menuOpen, setMenuOpen] = useState(false);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navLinks = [
        { name: "Github", href: "https://github.com/iloki-codes/Lokigram-Web" },
        { name: "LinkedIn", href: "https://www.linkedin.com/in/lokeshlokicodes" },
        { name: "Medium", href: "https://medium.com/@loki_codes" },
        { name: "Portfolio", href: "https://loki-codes.netlify.app" },
        { name: "Contact", href: "lokesh.loki.codes@gmail.com" },
    ];

  return (

    <div className="fixed top-5 right-10 p-2 z-50 burger">

    <div>

      <button onClick={toggleMenu} className="bg-[#b76e79] hover:cursor-pointer text-[#f7e7ce]">

        { menuOpen ? (
            <i className="fa fa-window-close-o absolute right-0 top-3 bg-[#b76e79] p-1 "> close</i>
          ) : (
            <i className="fa fa-bars p-1"> menu</i>
          )
        }

      </button>

    </div>

        { menuOpen && (

        <div className="p-1 h-[37vw] mt-5 w-[15vw] bg-[#f7e7ce]">
          <ul className="flex flex-col space-y-4 links absolute p-4 transition duration-200 ease-in-out">
            { navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="!text-[#b76e79] !no-underline hover:text-[#c4b5fd] mt-2 hover:px-50 hover:border-b-1 transition-colors duration-220" onClick={closeMenu}>
                  {link.name}
                </a>
            ))}
          </ul>
        </div>
      )
        }

    </div>

  );
}

export default Burger;