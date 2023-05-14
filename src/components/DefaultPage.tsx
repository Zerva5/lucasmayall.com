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
    <>
      <h1 className="text-center pb-4">{title}</h1>
      <div className="flex-grow flex flex-col">{children}</div>
    </>
  );
}
