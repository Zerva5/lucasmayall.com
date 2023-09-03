export default function SocialButton({
  link,
  innerContent,
}: {
  link: string;
  innerContent: JSX.Element;
}) {
  return (
    <a href={link} target="_blank">
      <button className="p-3  rounded-md  w-14 text-primary   
      hover:text-accent hover:border-accent
      border-2 border-primary
      transform transition duration-200 ease-in-out hover:scale-110
       
      ">
        {innerContent}
      </button>
    </a>
  );
}
