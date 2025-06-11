import { Box, Button, TextArea, TextField } from "@radix-ui/themes";
import React from "react";

const NewIssuePage = () => {
  return (
    <div className="space-y-3">
      <Box maxWidth="600px">
        <TextField.Root size="3" placeholder="Title" />
      </Box>
      <Box maxWidth="600px">
        <TextArea size="3" placeholder="Description" />
      </Box>
      <Button>Create</Button>
    </div>
  );
};

export default NewIssuePage;
