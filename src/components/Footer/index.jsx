import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  User,
  Divider,
  Link,
} from "@heroui/react";

function Footer() {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden h-auto">
      <section className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center p-2">
          <img src="/logoChiquitania01.svg" width={50} className="pr-2" />
          <h3 className=" font-bold">SIV WEB</h3>
        </div>
        <article className="w-3/5 text-center p-4">
          Página informativa con contenido sobre la historia, cultura, turismo y
          actualidad del municipio de San Ignacio de Velasco
        </article>
      </section>
      <Divider className="w-full" />
      <section className="p-2 flex items-center justify-center">
        <span className="pr-4">Desarrollo por</span>
        <Popover showArrow placement="bottom" backdrop={"blur"} offset={10}>
          <PopoverTrigger>
            <User
              as="button"
              avatarProps={{
                src: "/github.svg",
              }}
              className="transition-transform"
              description={
                <span className="text-foreground-500">Desarrollador Web</span>
              }
              name="nmmartinezp"
            />
          </PopoverTrigger>
          <PopoverContent className="p-4">
            <Link
              isBlock
              isExternal
              showAnchorIcon
              color="primary"
              href="https://mail.google.com/mail/?view=cm&to=martinezpardonisse@gmail.com"
            >
              Correo de contacto
            </Link>
          </PopoverContent>
        </Popover>
      </section>
    </div>
  );
}

export default Footer;
