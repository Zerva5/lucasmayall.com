// has className with default value of ""
type Props = {
    classNames?: string
};

export default function Separator({classNames = "h-1 w-full mx-auto bg-accent rounded-md my-2"}: Props){

    return (
        <div className={classNames}></div>
    )
}