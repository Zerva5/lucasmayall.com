export default function SocialButton({
  link,
  innerContent,
}: {
  link: string;
  innerContent: JSX.Element;
}) {
  return (
    <a href={link} target="_blank">
      <button className="px-1 py-1 bg-accent text-white rounded-md hover:bg-accent-alt focus:outline-none focus:bg-accent-alt w-10 fill-none">
        {innerContent}
      </button>
    </a>
  );
}
