import { prisma } from "@/prisma/client";
import { Box, Card, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";

interface issueDetailProps {
  params: Promise<{ id: string }> | { id: string }; // Type might be stricter in future Next.js versions
}

const IssueDetailPage = async ({ params }: issueDetailProps) => {
  // Await params if it's a promise, then destructure.
  // Although for 'params' it's often just available directly in Next.js 14 context
  // for the specific id access.
  const resolvedParams = await Promise.resolve(params); // Ensures it's resolved if it's a promise
  const { id } = resolvedParams;

  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!issue) return notFound();

  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="5">
      <Box>
        <IssueDetails issue={issue} />
        <Card>
          <p>{issue.description}</p>
        </Card>
      </Box>
      <Box>
        <EditIssueButton issueId={issue.id} />
      </Box>
    </Grid>
  );
};

export default IssueDetailPage;
