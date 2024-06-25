import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET(request : NextRequest,{params}:{params : {id: number}}){
    return NextResponse.json(
        [
            {id :1,name:"milk",price:20},
            {id :2,name:"Bread",price:10}
        ]
    )


}

export async function POST(request : NextRequest,{params}:{params : {id: number}}){
    const body =await request.json()
    const validation=schema.safeParse(body);
    if(!validation.success)
        return NextResponse.json(validation.error.errors,{status:400})
    return NextResponse.json({
        id:1,
        name:body.name,
        price:body.price
    })
}