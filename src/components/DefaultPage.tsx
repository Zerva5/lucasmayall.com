export default function DefaultPage({
  children,
  title,
  textMargin = true
}: {
  children: React.ReactNode;
  title: string;
  textMargin?: boolean;
}) {
  return (
    <div className={`flex-1 flex-col flex pageContent my-5 text-xl ${textMargin ? "mx-20" : ""}`}>
      

      {/* <div className="page-content py-5 text-xl"> */}
        <h1 className="text-center my-5">{title}</h1>
        <div className="flex-1">{children}</div>
    </div>
  );
}
