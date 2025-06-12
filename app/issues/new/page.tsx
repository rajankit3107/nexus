"use client";

import { Box, Button, TextArea, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import React from "react";

const NewIssuePage = () => {
  return (
    <div className="space-y-3">
      <Box maxWidth="600px">
        <TextField.Root size="3" placeholder="Title" />
      </Box>
      <Box maxWidth="600px">
        <SimpleMDE placeholder="Description" />
      </Box>
      <Button>Create</Button>
    </div>
  );
};

export default NewIssuePage;
