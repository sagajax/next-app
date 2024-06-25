import { error } from "console";
import { NextRequest, NextResponse } from "next/server"
import schema from "../schema";
import prisma from "@/prisma/client";

export async function GET(
    request : NextRequest,
    {params} : {params: { id : string}}){
        const id = parseInt(params.id);
        const user = await prisma.user.findUnique({
            where:{id}
        })
        if (!user)
            return NextResponse.json({error:'user not found '},{status:404})
        return NextResponse.json(user)
}

export async function PUT(request : NextRequest,
    {params} : {params: { id : string}}) {
    const id = parseInt(params.id);
    const body = await request.json();
    const validation = schema.safeParse(body);
    if (!validation.success)
        return NextResponse.json(validation.error.errors,{status:400})
    const user =await prisma.user.findUnique({
        where:{id}
    })
    if(!user)
        return NextResponse.json({error:'user not found '},{status:404})
    const newUser = await prisma.user.update({
        where:{id: user.id},
        data:{
            name:body.name,
            email:body.email,
        }
        
    })
    return NextResponse.json(newUser)
}   

export  async function DELETE(
    request : NextRequest,
    {params} : {params: { id : string}}){
        const id = parseInt(params.id);
        const user = await prisma.user.findUnique({
            where:{id}
        })
        if(!user)
            return NextResponse.json({error:'user not found '},{status:404})
        await prisma.user.delete({
            where:{id}
        })
        return NextResponse.json({}) 
    }