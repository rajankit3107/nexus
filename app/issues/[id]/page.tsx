import { prisma } from "@/prisma/client";
import { notFound } from "next/navigation";
import React from "react";

interface issueDetailProps {
  params: { id: string };
}

const IssueDetailPage = async ({ params: { id } }: issueDetailProps) => {
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!issue) return notFound();

  return (
    <div>
      <p>{issue.title}</p>
      <p>{issue.description}</p>
      <p>{issue.status}</p>
      <p>{issue.createdAt.toDateString()}</p>
    </div>
  );
};

export default IssueDetailPage;
