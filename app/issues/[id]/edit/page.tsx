import { prisma } from "@/prisma/client";
import IssueForm from "../../_components/IssueForm";
import { notFound } from "next/navigation";

interface EditIssueProps {
  params: Promise<{ id: string }>;
}

const EditIssuePage = async ({ params }: EditIssueProps) => {
  const { id } = await params;
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  if (!issue) notFound();
  return (
    <div>
      <IssueForm issue={issue} />
    </div>
  );
};

export default EditIssuePage;
