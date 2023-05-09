export default function SideContentBox({
  children,
  title,
  isFirst = false,
}: {
  children: React.ReactNode;
  title: string;
  isFirst?: boolean;
}) {
  return (
    <div
      className={`bg-white shadow-md rounded-md p-4 text-text-primary ${
        isFirst ? "" : "mt-4"
      }`}
    >
      <h4 className="">{title}</h4>
      <div>{children}</div>
    </div>
  );
}
