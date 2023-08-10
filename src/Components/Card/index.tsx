

export const Card = () =>{
    return (
        <div className="bg-white first-letter w-56 h-60 rounded">
            <figure className="relative mb-2 w-full h-4/8 ">
                <div className="text-xs cursor-pointer absolute top-0 right-0 flex justify-center items-center bg-green-500 w-4 h-4 m-1 rounded-full">
                    +
                </div>
                <img className="w-full h-full object-cover rounded-t" src="https://www.muycomputer.com/wp-content/uploads/2022/12/iPhonePro14.jpg" alt="" />
            </figure>
            <div className="relative">
                <h3 className="text-xs font-bold">Title</h3>
                <p className="text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <p className="flex justify-end"><span>$500</span></p>
            </div>
        </div>
    )
}