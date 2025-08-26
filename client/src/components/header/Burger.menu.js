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
        { name: "Github", href: "/" },
        { name: "LinkedIn", href: "/" },
        { name: "Medium", href: "/" },
        { name: "Portfolio", href: "/" },
        { name: "Contact", href: "/" },
    ];

  return (

    <div className="fixed top-5 right-10 p-2 z-50">

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