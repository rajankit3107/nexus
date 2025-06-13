import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";
import React from "react";

interface StatusProps {
  status: Status;
}

//Record type in typescrit helps us to define key value pairs
const statusMap: Record<
  Status,
  { label: string; color: "red" | "violet" | "green" }
> = {
  OPEN: { label: "Open", color: "green" },
  IN_PROGRESS: { label: "In Progress", color: "violet" },
  CLOSED: { label: "Closed", color: "red" },
};

const IssueStatusBadge = ({ status }: StatusProps) => {
  return (
    <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>
  );
};

export default IssueStatusBadge;
