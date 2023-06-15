import { Skeleton } from "@/components/ui/skeleton" 
import { IconStarFilled, } from "@tabler/icons-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

export default function Loading() {
    return (
        <div>
            <Card className="drop-shadow-lg">
                <CardHeader className="h-full w-full row-span-2 overflow-hidden m-0 p-0">
                    <Skeleton className="row-span-2 object-cover rounded-md h-full w-full" />
                </CardHeader>
                <CardContent>
                <div className="flex flex-col p-4 h-full w-full justify-around overflow-hidden">
                    <div>
                    <div className="flex justify-between">
                        <Skeleton className="h-8 w-12"/>
                        <div className="flex">  
                            <Skeleton className="h-3 w-3" />
                            <Skeleton className="h-3 w-3" />
                            <Skeleton className="h-3 w-3" />
                            <Skeleton className="h-3 w-3" />
                        </div>
                    </div>
                    <Skeleton className="w-18 h-8" />

                    <div className="flex gap-3 py-1">
                        <h4 className="flex pr-2 items-center">
                        <Skeleton className="h-3 w-3" />
                        <span className="pl-2 text-sm"><Skeleton className="h-3 w-3" /></span>
                        </h4>
                        
                        <h4 className="flex items-center">
                        <Skeleton className="h-3 w-3" />
                        <span className="pl-2 text-sm">
                            <Skeleton className="h-3 w-3" />
                        </span>
                        </h4>
                    </div>
                    </div>
                </div>
                </CardContent>
                <CardFooter>  
                    <Skeleton className="h-12 w-18" />
                </CardFooter>
            </Card>
        </div>
    )
  }
  