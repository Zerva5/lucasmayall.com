import '../app/icons.css'

export default function SocialButton({
  link,
  innerContent,
}: {
  link: string;
  innerContent: JSX.Element;
}) {
  return (
    <a href={link} target="_blank">
      <div className="social-button
      ">
        {innerContent}
      </div>
    </a>
  );
}
