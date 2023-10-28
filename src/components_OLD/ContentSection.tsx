
import Separator from "./Separator";
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
    <>

    {!isFirst && (<Separator/>)}
        <div
      className={` shadow-md  py-4 text-primary ${
        isFirst ? "" : "mt-0 "
      }`}
    >
      <h4 className="text-xl font-bold">{title}</h4>
      <div>{children}</div>
    </div>
    </>
  );
}
