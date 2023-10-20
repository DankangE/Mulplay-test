import * as React from "react";
import Input from "@mui/joy/Input";
import Stack from "@mui/joy/Stack";

export default function InputMedium({ placeholder, value, onChange }) {
  const [inputValue, setInputValue] = React.useState(value);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <Stack spacing={2}>
      <Input
        size="md"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        sx={{ width: "400px" }}
        fontSize="14px"
      />
      {/* disabled 추가시 비활성됨  */}
    </Stack>
  );
}
