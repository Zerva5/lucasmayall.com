export default function DefaultPage({
  children,
  title,
  textMargin = true,
}: {
  children: React.ReactNode;
  title: string;
  textMargin?: boolean;
}) {
  return (
      <div
        className={`text-lg rounded-md h-full flex flex-col ${
          textMargin ? "mx-21" : ""
        }`}
      >
        {/* <div className="page-content py-5 text-xl"> */}
        <h1 className="text-center pb-5">{title}</h1>
        <div className="flex-grow">{children}</div>
      </div>
  );
}
