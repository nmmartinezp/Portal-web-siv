async function HistoryLayout({ children, tourismModal, params }) {
  const { place } = await params;
  const Container = place !== undefined ? "div" : "main";
  return (
    <Container className="w-full min-h-[var(--myapp-main-height)] flex flex-col">
      {children}
      {tourismModal}
    </Container>
  );
}

export default HistoryLayout;
