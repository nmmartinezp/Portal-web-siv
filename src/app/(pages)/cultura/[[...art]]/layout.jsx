async function CultureLayout({ children, cultureModal, params }) {
  const { art } = await params;
  const Container = art !== undefined ? "div" : "main";
  return (
    <Container className="w-full min-h-[var(--myapp-main-height)] flex flex-col">
      {children}
      {cultureModal}
    </Container>
  );
}

export default CultureLayout;
