import { User, Divider, Link } from "@heroui/react";

function Footer() {
  return (
    <footer
      id="mainfooter"
      className="w-full h-auto bg-zinc-700 py-5 flex flex-col items-center justify-center"
    >
      <section className="flex flex-col items-center justify-center">
        <article className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center p-2">
            <img src="/logoChiquitania01.svg" width={50} className="pr-2" />
            <h3 className="font-bold">SIV WEB</h3>
          </div>
          <p className="w-3/5 text-center p-4">
            Página informativa con contenido sobre la historia, cultura, turismo
            y actualidad del municipio de San Ignacio de Velasco
          </p>
        </article>
      </section>
      <Divider className="w-full" />
      <section className="p-2 flex items-center justify-center">
        <span className="pr-4">Desarrollo por</span>
        <Link
          isBlock
          isExternal
          showAnchorIcon
          color="warning"
          href="https://mail.google.com/mail/?view=cm&to=martinezpardonisse@gmail.com"
        >
          <User
            as="button"
            avatarProps={{
              src: "/github.svg",
            }}
            className="transition-transform"
            description={
              <span className="text-foreground-500">Desarrollador Web</span>
            }
            name={
              <span className="text-foreground-700 font-semibold text-md">
                nmmartinezp
              </span>
            }
          />
        </Link>
      </section>
    </footer>
  );
}

export default Footer;
