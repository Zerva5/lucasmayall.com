export default function SocialButton({
  link,
  innerContent,
}: {
  link: string;
  innerContent: JSX.Element;
}) {
  return (
    <a href={link} target="_blank">
      <button className="px-2 py-2 bg-accent text-white rounded-md hover:bg-accent-alt focus:outline-none focus:bg-accent-alt">
        {innerContent}
      </button>
    </a>
  );
}
