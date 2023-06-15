import { Heart } from "lucide-react";

const SimilarProperties = () => {

    return (
        <div className="py-16 px-6">
            <div className="justify-center max-w-4xl mx-auto py-8">
                <h1 className="text-center font-bold text-4xl pb-2">Similar Properties</h1>
                <p className="text-center font-light leading-relaxed ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptate alias eveniet, porro, reiciendis illum assumenda officia cupiditate rerum corrupti asperiores? Similique, fugit. Enim est impedit aut, assumenda praesentium quia.</p>
            </div>
            <div className="max-w-4xl mx-auto grid sm:grid-col-1 lg:grid-cols-2 items-center">
                <div className="p-6 min-h-[50vh] relative">
                    <img src="https://source.unsplash.com/XcVm8mn7NUM" alt="" className="absolute inset-0 w-full h-full object-cover rounded-lg" loading="lazy" />
                </div>
                <form className="2xl:pl-6 lg:pl-6">
                    <div className="flex-wrap pb-1">
                        <div className="flex items-center">
                            <h1 className="flex-auto font-medium">
                                Interior Design
                            </h1>
                            <button className="flex-none flex items-center justify-center w-9 h-9 rounded-full text-violet-600 bg-violet-50" type="button" aria-label="Like">
                                <Heart />
                            </button>
                        </div>
                        <div className="w-full flex-none mt-2 order-1 text-3xl font-bold text-violet-600">
                        ₱20,000.00/mo
                        </div>
                    </div>
                    <p className="text-sm text-slate-500">
                    1 Bedroom Condo for sale in Maple at Verdant Towers, Maybunga, Metro Manila Be the first to live in the Heart of Metro Manila:Maple at Ortigas East (Formerly Frontera Verde/Tiendesitas) by Ortigas LandA 50 Billion Redeveloped Plan by Ortigas & Company in partnership with Ayala Land. This is the right time to invest before prices go much higher next ear.Be the First!Please call or message me anytime. I'll be more than happy to assist you.Disclaimer: Prices and availability might change without prior notice.
                    </p>
                </form>
            </div>
            
            <div className="max-w-4xl mx-auto grid sm:grid-col-1 lg:grid-cols-2 py-8 items-center">
                <div className="p-6 min-h-[50vh] relative lg:order-2">
                    <img src="https://source.unsplash.com/rYZkQdz2t9o" alt="" className="absolute inset-0 w-full h-full object-cover rounded-lg" loading="lazy" />
                </div>
                <form className="2xr:pl-6 lg:pr-6 lg:order-1">
                    <div className="flex-wrap pb-1">
                        <div className="flex items-center">
                            <h1 className="flex-auto font-medium">
                                Interior Design
                            </h1>
                            <button className="flex-none flex items-center justify-center w-9 h-9 rounded-full text-violet-600 bg-violet-50" type="button" aria-label="Like">
                                <Heart />
                            </button>
                        </div>
                        <div className="w-full flex-none mt-2 order-1 text-3xl font-bold text-violet-600">
                            ₱20,000.00/mo
                        </div>
                    </div>
                    <p className="text-sm text-slate-500">
                    1 Bedroom Condo for sale in Maple at Verdant Towers, Maybunga, Metro Manila Be the first to live in the Heart of Metro Manila:Maple at Ortigas East (Formerly Frontera Verde/Tiendesitas) by Ortigas LandA 50 Billion Redeveloped Plan by Ortigas & Company in partnership with Ayala Land. This is the right time to invest before prices go much higher next ear.Be the First!Please call or message me anytime. I'll be more than happy to assist you.Disclaimer: Prices and availability might change without prior notice.
                    </p>
                </form>
            </div>
        </div>
    )
}

export default SimilarProperties;