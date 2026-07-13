import { starlinkFooter } from "../../../../../content/starlink/starlinkFooter.content";

export const FooterNavItems = () => {
  return (
    <>
      <nav className="footer__nav">
        {starlinkFooter.map((i) => (
          <a key={i.label} className="footer__nav-link" href={i.link}>
            {i.label}
          </a>
        ))}
      </nav>
    </>
  );
};
