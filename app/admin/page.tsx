import { HiArrowUp } from "react-icons/hi";
import { HiArrowLongDown } from "react-icons/hi2";

const page = () => {
    return (
        <main>
            {/* Top Cards Start */}
            <div className="flex items-center">
                {/* Box One Start */}
                <div className="h-[250px] w-[350px] shadow-md ml-10">
                    <span className="flex font-semibold items-center justify-center text-xl cursor-pointer mt-10 text-[#555]">
                        Revenue
                    </span>

                    <div className="flex items-center justify-center mt-3">
                        <span className="font-semibold">$500</span>
                    </div>

                    <div>
                        <div className="flex items-center justify-center mt-3">
                            <HiArrowUp className="text-3xl text-green-700" />
                            <HiArrowLongDown className="text-3xl text-red-700" />
                        </div>
                        
                        <div className="flex items-center justify-center mt-3">
                            <span className="font-semibold">Compare to the last month</span>
                        </div>

                    </div>
                </div>
                {/* Box One End */}

                {/* Box Two Start */}
                <div className="h-[250px] w-[350px] shadow-md ml-10">
                    <span className="flex font-semibold items-center justify-center text-xl cursor-pointer mt-10 text-[#555]">
                        Users
                    </span>

                    <div className="flex items-center justify-center mt-3">
                        <span className="font-semibold">1000</span>
                    </div>

                    <div>
                        <div className="flex items-center justify-center mt-3">
                            <HiArrowUp className="text-3xl text-green-700" />
                            <HiArrowLongDown className="text-3xl text-red-700" />
                        </div>
                        
                        <div className="flex items-center justify-center mt-3">
                            <span className="font-semibold">Compare to the last month</span>
                        </div>

                    </div>
                </div>
                {/* Box Two End */}

                {/* Box Three Start */}
                <div className="h-[250px] w-[350px] shadow-md ml-10">
                    <span className="flex font-semibold items-center justify-center text-xl cursor-pointer mt-10 text-[#555]">
                        Statistics
                    </span>

                    <div className="flex items-center justify-center mt-3">
                        <span className="font-semibold">500</span>
                    </div>

                    <div>
                        <div className="flex items-center justify-center mt-3">
                            <HiArrowUp className="text-3xl text-green-700" />
                            <HiArrowLongDown className="text-3xl text-red-700" />
                        </div>
                        
                        <div className="flex items-center justify-center mt-3">
                            <span className="font-semibold">Compare to the last month</span>
                        </div>

                    </div>
                </div>
                {/* Box Three End */}
            </div>
            {/* Top Cards End */}

            {/* Start Chart */}
                <div>
                    
                </div>
            {/* Start Chart */}

        </main>
    );
}

export default page;