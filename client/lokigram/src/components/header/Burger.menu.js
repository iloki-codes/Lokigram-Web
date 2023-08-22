

function Burger() {

    const links = document.querySelector(".links");
    const item = document.querySelectorAll(".item");
    const hamburger= document.querySelector(".hamburger");
    const closeIcon= document.querySelector(".closeIcon");
    const menuIcon = document.querySelector(".menuIcon");

    function toggleMenu() {

        if (links.classList.contains("showMenu")) {
            links.classList.remove("showMenu");
            closeIcon.style.display = "none";
            menuIcon.style.display = "block";
        }
            else {
            links.classList.add("showMenu");
            closeIcon.style.display = "block";
            menuIcon.style.display = "none";
        }
    }

    hamburger.addEventListener("click", toggleMenu);

    item.forEach( 
        function(item) { 
        item.addEventListener("click", toggleMenu);
        }
  )

    return (
        <>
        {
            <div className="sidetab fixed z-50 top-12 right-12 bg-lime-700 -translate-y-full ">

                <ul className="links absolute flex fixed top-0 lrft-0 bottom-0 rigt-0 pt-4 transition duration-0.2 ease-in-out">
                    <li className="item"><a href=""></a>Github<i class="fa fa-github" aria-hidden="true"></i></li>
                    <li className="item"><a href=""></a>LinkedIn<i class="fa fa-linkedin-square" aria-hidden="true"></i></li>
                    <li className="item"><a href=""></a>Medium<i class="fa fa-sticky-note" aria-hidden="true"></i></li>

                <li className="item">
                    <p className="">Contact Me<i class="fa fa-envelope-o" aria-hidden="true"></i></p>
                </li>

                <li className="item">@loki-codes</li>

                </ul>

                <button class="hamburger">
                <i className="menuIcon fa fa-bars" aria-hidden="true">menu</i>
                <i className="closeIcon fa fa-window-close-o hidden" aria-hidden="true">close</i>
                </button>

            </div>
        }
        </>
    )
}

export default Burger;



// .hamburger {
//     position: fixed;
//     z-index: 100;
//     top: 1rem;
//     right: 1rem;
//     padding: 4px;
//     border: black solid 1px;
//     background: white;
//     cursor: pointer;
//   }
// .closeIcon {
//     display: none;
//   }
//   .menu {
//     position: fixed;
//     transform: translateY(-100%);
//     transition: transform 0.2s;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     z-index: 99;
//     background: black;
//     color: white;
//     list-style: none;
//     padding-top: 4rem;
//   }


// .showMenu {
//   transform: translateY(0);
// }