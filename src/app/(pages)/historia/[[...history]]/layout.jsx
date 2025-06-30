async function HistoryLayout({ children, historyModal, params }) {
  const { history } = await params;
  const Container = history !== undefined ? "div" : "main";
  return (
    <Container className="w-full min-h-[var(--myapp-main-height)] flex flex-col">
      {children}
      {historyModal}
    </Container>
  );
}

export default HistoryLayout;
