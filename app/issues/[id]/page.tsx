import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import { prisma } from "@/prisma/client";
import { Box, Button, Card, Flex, Grid, Heading } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import { Pencil2Icon } from "@radix-ui/react-icons";
import Link from "next/link";

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
        <Heading>{issue.title}</Heading>
        <Flex className="flex space-x-3 my-2">
          <IssueStatusBadge status={issue.status} />
          <p className="mt-[-3px]">{issue.createdAt.toDateString()}</p>
        </Flex>
        <Card>
          <p>{issue.description}</p>
        </Card>
      </Box>
      <Box>
        <Button>
          <Pencil2Icon />
          <Link href={`/issues/${issue.id}/edit`}>Edit Issue</Link>
        </Button>
      </Box>
    </Grid>
  );
};

export default IssueDetailPage;
