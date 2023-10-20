import * as React from "react";
import Input from "@mui/joy/Input";
import Stack from "@mui/joy/Stack";

export default function InputLarge() {
  return (
    <Stack spacing={2}>
      <Input size="lg" placeholder="Large" sx={{ width: "500px" }} />
      {/* disabled 추가시 비활성됨  */}
    </Stack>
  );
}
