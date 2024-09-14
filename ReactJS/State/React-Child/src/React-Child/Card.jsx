import React from 'react'

const Card = ({children}) => {
    return (
        <div>
            <div className="flex max-w-2xl flex-col items-center rounded-md border md:flex-row">
                <div className="h-full w-full md:h-[200px] md:w-[300px]">
                    <img
                        src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                        alt="Laptop"
                        className="h-full w-full rounded-md object-cover"
                    />
                </div>
                <div>
                    <div className="p-4">
                        <h1 className="inline-flex items-center text-lg font-semibold">
                            About Macbook 
                        </h1>
                        {children}
                        <p className="mt-3 text-sm text-gray-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
                        </p>
                        <div className="mt-4">
                            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                                #Macbook
                            </span>
                            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                                #Apple
                            </span>
                            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                                #Laptop
                            </span></div>
                        <div className="mt-3 flex items-center space-x-2">
                            <img
                                className="inline-block h-8 w-8 rounded-full"
                                src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                                alt="Dan_Abromov"
                            />
                            <span className="flex flex-col">
                                <span className="text-[10px] font-medium text-gray-900">Dan Abromov</span>
                                <span className="text-[8px] font-medium text-gray-500">@dan_abromov</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card