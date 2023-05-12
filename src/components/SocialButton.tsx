export default function SocialButton({
  link,
  innerContent,
}: {
  link: string;
  innerContent: JSX.Element;
}) {
  return (
    <a href={link} target="_blank">
      <button className="px-2 py-2 bg-gray-700 rounded-md hover:bg-accent-alt focus:outline-none focus:bg-accent-alt w-10 text-primary  hover:bg-accent">
        {innerContent}
      </button>
    </a>
  );
}
