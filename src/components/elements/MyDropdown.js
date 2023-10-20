import * as React from "react";
import IconButton from "@mui/joy/IconButton";
import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListDivider from "@mui/joy/ListDivider";
import MoreVert from "@mui/icons-material/MoreVert";
import Edit from "@mui/icons-material/Edit";
import DeleteForever from "@mui/icons-material/DeleteForever";
import MenuButton from "@mui/joy/MenuButton";
import Dropdown from "@mui/joy/Dropdown";

const MyDropdown = ({ stat }) => {
  const pundingOpen = stat === 3 || stat === 4;

  return (
    <Dropdown>
      <MenuButton
        slots={{ root: IconButton }}
        slotProps={{ root: { variant: "outlined", color: "neutral" } }}
        sx={{ position: "absolute", top: "15px", right: "15px" }}
      >
        <MoreVert />
      </MenuButton>
      <Menu placement="right-end">
        {pundingOpen ? (
          <MenuItem>
            <ListItemDecorator>
              <Edit />
            </ListItemDecorator>
            수익관리
          </MenuItem>
        ) : (
          <>
            <MenuItem>
              <ListItemDecorator>
                <Edit />
              </ListItemDecorator>
              수정하기
            </MenuItem>
            <ListDivider />
            <MenuItem variant="soft" color="danger">
              <ListItemDecorator sx={{ color: "inherit" }}>
                <DeleteForever />
              </ListItemDecorator>
              삭제하기
            </MenuItem>
          </>
        )}
      </Menu>
    </Dropdown>
  );
};

export default MyDropdown;
