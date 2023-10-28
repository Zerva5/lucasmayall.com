import Separator from "./Separator";

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
      <h1 className="text-center pb-0 text-4xl">{title}</h1>
      <Separator/>
      <div className="flex-grow flex flex-col">{children}</div>
    </>
  );
}
