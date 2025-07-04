import { IssueSchema } from "@/app/validationSchemas";
import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

interface EditIssueProps {
    params: Promise<{ id: string }>;
}

export async function PATCH(request : NextRequest, {params} : EditIssueProps) {
    const body = await request.json()
    const validation = IssueSchema.safeParse(body)

    if(!validation.success)
        return NextResponse.json(validation.error.format(), {status : 400})

    const issue = await prisma.issue.findUnique({
        where : {
            id : parseInt((await params).id),
        }
    })

    if(!issue) 
        return NextResponse.json({error : "Invalid Issue"}, {status: 404})

  const updatedIssue = await prisma.issue.update({
        where :{id : issue.id},
        data : {
            title : body.title,
            description : body.description
        }
    })

    return NextResponse.json(updatedIssue, {status : 200})
}