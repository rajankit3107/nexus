import { IssueStatusBadge } from "@/app/components";
import { Issue } from "@prisma/client";
import { Heading, Flex } from "@radix-ui/themes";
import React from "react";

const IssueDetails = ({ issue }: { issue: Issue }) => {
  return (
    <>
      <Heading>{issue.title}</Heading>
      <Flex className="flex space-x-3 my-2">
        <IssueStatusBadge status={issue.status} />
        <p className="mt-[-3px]">{issue.createdAt.toDateString()}</p>
      </Flex>
    </>
  );
};

export default IssueDetails;
