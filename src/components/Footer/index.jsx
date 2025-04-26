import { Divider } from "@heroui/react";

function Footer() {
  return (
    <div className="flex flex-col items-center justify-center">
      <section className="flex flex-col items-center justify-center">
        <h3 className="p-2 font-bold">SIV WEB</h3>
        <article className="w-3/5 text-center p-4">
          Pagina informativa con contenido sobre la historia, cultura, turismo,
          actualidad de el municipio de San Ignacio de Velasco.
        </article>
      </section>
      <Divider className="w-full" />
      <section className="p-2">
        <span>Desarrollo por Solar64</span>
      </section>
    </div>
  );
}

export default Footer;
