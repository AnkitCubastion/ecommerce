import { Link } from "react-router-dom";

const links = [
  { id: 1, url: "/", text: "Home" },
  { id: 2, url: "aboutUs", text: "About Us" },
  { id: 3, url: "cart", text: "Cart" },
];

const NavLinks = () => {
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        return (
          <div key={id}>
            <Link to={url}>{text}</Link>
          </div>
        );
      })}
    </>
  );
};

export default NavLinks;
