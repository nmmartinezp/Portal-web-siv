import CardPageLayout from "@layouts/CardPageLayout";
import CardContent from "@components/CardContent";
import useHistoryPageData from "@hooks/useHistoryPageData";

function History() {
  const data = useHistoryPageData();
  const columns = "12";

  return (
    <CardPageLayout cols={`grid-cols-${columns}`}>
      {data.map((item) => (
        <CardContent
          animation
          description={item.description}
          src={item.image}
          cols={`col-span-${columns}`}
          col={`md:col-span-${item.space}`}
        >
          {item.title}
        </CardContent>
      ))}
    </CardPageLayout>
  );
}

export default History;
