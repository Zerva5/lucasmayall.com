
export default function ClassEntry({code, title}: {code: string, title: string}){
    return(
            <div className="flex">
                <h5 className="font-bold flex-shrink-0 w-40">{code}:</h5>
                <p className="flex-1 ">{title}</p>
            </div>
    );
}