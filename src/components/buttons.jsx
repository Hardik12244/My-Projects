export default function But({label , imgsrc}){
    return (
        <div className=' m-1 flex w-48 px-5  py-2 rounded-xl text-[#9e9ea0] hover:bg-blue-200 hover:w-56 hover:cursor-pointer hover:rounded-2xl hover:px-6 hover:py-3 hover:text-[#002b5b]'>
           {label}  
           <img src={imgsrc} alt={label} className="w-6 h-6 ml-auto" />
        </div>
    )
}