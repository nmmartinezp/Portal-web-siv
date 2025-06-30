import { Divider } from "@heroui/react";
function SugerenceMenu({ id, children, title }) {
  return (
    <nav
      id={id}
      key={id}
      className="w-full h-auto flex flex-col items-start justify-start pt-8 pb-16 px-4 rounded-md bg-foreground-50"
    >
      <h4 className="text-xl">{title}</h4>
      <Divider className="my-2" />
      <ul className="w-full flex flex-col text-lg">{children}</ul>
    </nav>
  );
}

export default SugerenceMenu;
