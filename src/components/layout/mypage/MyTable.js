import * as React from "react";
import { useState } from "react";

import PropTypes from "prop-types";
import Box from "@mui/joy/Box";
import Table from "@mui/joy/Table";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import Checkbox from "@mui/joy/Checkbox";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import IconButton from "@mui/joy/IconButton";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import Link from "@mui/joy/Link";
import Tooltip from "@mui/joy/Tooltip";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { visuallyHidden } from "@mui/utils";
import Button from "@mui/joy/Button";

function labelDisplayeddata({ from, to, count }) {
  return `${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`;
}

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "pay_no",
    numeric: false,
    disablePadding: true,
    label: "No",
  },
  {
    id: "prod_title",
    numeric: true,
    disablePadding: false,
    label: "프로젝트이름",
  },
  {
    id: "user_id",
    numeric: true,
    disablePadding: false,
    label: "아이디",
  },
  {
    id: "pay_price",
    numeric: true,
    disablePadding: false,
    label: "금액",
  },
  {
    id: "pay_regdate",
    numeric: true,
    disablePadding: false,
    label: "일시",
  },
  {
    id: "payment",
    numeric: true,
    disablePadding: false,
    label: "송금상태",
  },
  {
    id: "gift",
    numeric: true,
    disablePadding: false,
    label: "선물전달",
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <thead>
      <tr>
        <th>
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            slotProps={{
              input: {
                "aria-label": "select all desserts",
              },
            }}
            sx={{ verticalAlign: "sub" }}
          />
        </th>
        {headCells.map((headCell) => {
          const active = orderBy === headCell.id;
          return (
            <th
              key={headCell.id}
              aria-sort={
                active
                  ? { asc: "ascending", desc: "descending" }[order]
                  : undefined
              }
            >
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Link
                underline="none"
                color="neutral"
                textColor={active ? "primary.plainColor" : undefined}
                component="button"
                onClick={createSortHandler(headCell.id)}
                fontWeight="lg"
                startDecorator={
                  headCell.numeric ? (
                    <ArrowDownwardIcon sx={{ opacity: active ? 1 : 0 }} />
                  ) : null
                }
                endDecorator={
                  !headCell.numeric ? (
                    <ArrowDownwardIcon sx={{ opacity: active ? 1 : 0 }} />
                  ) : null
                }
                sx={{
                  "& svg": {
                    transition: "0.2s",
                    transform:
                      active && order === "desc"
                        ? "rotate(0deg)"
                        : "rotate(180deg)",
                  },
                  "&:hover": { "& svg": { opacity: 1 } },
                }}
              >
                {headCell.label}
                {active ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
              </Link>
            </th>
          );
        })}
      </tr>
    </thead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "right",
        py: 1,
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: "background.level1",
        }),
        borderTopLeftRadius: "var(--unstable_actionRadius)",
        borderTopRightRadius: "var(--unstable_actionRadius)",
      }}
    >
      {numSelected > 0 ? (
        <Typography sx={{ flex: "1 1 100%" }} component="div">
          {numSelected} 선택됨
        </Typography>
      ) : (
        <Typography
          level="body-lg"
          sx={{ flex: "1 1 100%", fontWeight: "bold", fontSize: "20px" }}
          id="tableTitle"
          component="div"
        >
          나의 수익관리
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="선물상태변경">
          <IconButton size="sm" color="Neutral" variant="solid">
            <AddCircleOutlineOutlinedIcon />
          </IconButton>
        </Tooltip>
      ) : (
        " "
      )}
    </Box>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function TableSortAndSelection({ data }) {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dataPerPage] = React.useState(5);

  // Map data into an object where keys are pay_no and values are button states
  const getStatusLabel = (prod_stat) => {
    return prod_stat === 4 ? "송금완료" : "대기중";
  };

  const initialButtonStates = data.reduce(
    (states, data) => ({
      ...states,
      [data.pay_no]: {
        label: "대기중",
        color: "neutral",
      },
    }),
    {}
  );

  const [buttonStates, setButtonStates] = useState(initialButtonStates);

  const toggleButton = (id) => {
    setButtonStates((prevState) => ({
      ...prevState,
      [id]: {
        label: prevState[id]?.label === "대기중" ? "전달완료" : "대기중",
      },
    }));
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = data.map((n) => n.pay_no);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangedataPerPage = (event, newValue) => {
    dataPerPage(parseInt(newValue.toString(), 10));
    setPage(0);
  };

  // getLabelDisplayedRowsTo 함수 수정
  const getLabelDisplayeddataTo = () => {
    if (data.length === -1) {
      return data.length;
    }
    return Math.min((page + 1) * dataPerPage, data.length);
  };

  const isSelected = (pay_no) => selected.indexOf(pay_no) !== -1;

  // Avoid a layout jump when reaching the last page with empty data.
  const emptydata =
    page > 0 ? Math.max(0, (1 + page) * dataPerPage - data.length) : 0;

  return (
    <Sheet
      variant="outlined"
      sx={{ width: "80%", boxShadow: "sm", borderRadius: "sm" }}
    >
      <EnhancedTableToolbar numSelected={selected.length} />
      <Table
        aria-labelledby="tableTitle"
        hoverRow
        sx={{
          "--TableCell-headBackground": "transparent",
          "--TableCell-selectedBackground": (theme) =>
            theme.vars.palette.success.softBg,
          "& thead th:nth-of-type(1), & thead th:nth-of-type(2)": {
            width: "50px",
            // 수정된 부분: padding을 추가하여 간격 조정
          },
          "& thead th:nth-of-type(3)": {
            width: "25%",
          },
          "& tr > *:nth-of-type(n+5)": { textAlign: "right" }, // 수정된 부분: nth-type 대신 nth-of-type 사용
        }}
      >
        <EnhancedTableHead
          numSelected={selected.length}
          order={order}
          orderBy={orderBy}
          onSelectAllClick={handleSelectAllClick}
          onRequestSort={handleRequestSort}
          rowCount={data.length}
        />
        <tbody>
          {stableSort(data, getComparator(order, orderBy))
            .slice(page * dataPerPage, page * dataPerPage + dataPerPage)
            .map((row, index) => {
              const isItemSelected = isSelected(row.pay_no);
              const labelId = `enhanced-table-checkbox-${index}`;

              return (
                <tr
                  role="checkbox"
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={row.pay_no}
                  selected={isItemSelected}
                  style={
                    isItemSelected
                      ? {
                          "--TableCell-dataBackground": "#EE833E",
                          "--TableCell-headBackground": "#EE833E",
                          opacity: "50%",
                        }
                      : {}
                  }
                >
                  <th scope="row">
                    <Checkbox
                      checked={isItemSelected}
                      onClick={(event) => handleClick(event, row.pay_no)}
                      slotProps={{
                        input: {
                          "aria-labelledby": labelId,
                        },
                      }}
                      sx={{ verticalAlign: "top" }}
                    />
                  </th>
                  <th id={labelId} scope="row">
                    {row.pay_no}
                  </th>

                  <td>{row.prod_title}</td>
                  <td>{row.user_id}</td>
                  <td style={{ textAlign: "right" }}>{row.pay_price}</td>
                  <td style={{ textAlign: "right" }}>{row.pay_regdate}</td>
                  <td>{getStatusLabel(row.prod_stat)}</td>
                  <td>
                    <Button
                      size="sm"
                      variant={buttonStates[row.pay_no]?.label || "plain"}
                      onClick={() => toggleButton(row.pay_no)}
                    >
                      {buttonStates[row.pay_no]?.label || "Edit"}
                    </Button>
                  </td>
                </tr>
              );
            })}
          {emptydata > 0 && (
            <tr
              style={{
                height: `calc(${emptydata} * 40px)`,
                "--TableRow-hoverBackground": "transparent",
              }}
            >
              <td colSpan={8} aria-hidden />
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={8}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "right",
                  gap: 2,
                  justifyContent: "flex-end",
                }}
              >
                <FormControl orientation="horizontal" size="sm">
                  <FormLabel>데이터 갯수:</FormLabel>
                  <Select
                    onChange={handleChangedataPerPage}
                    value={dataPerPage}
                  >
                    <Option value={5}>5</Option>
                    <Option value={10}>10</Option>
                    <Option value={25}>25</Option>
                  </Select>
                </FormControl>

                <Typography
                  textAlign="right"
                  sx={{
                    minWidth: 80,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {labelDisplayeddata({
                    from: data.length === -1 ? "-" : page * dataPerPage + 1,
                    to: Math.min((page + 1) * dataPerPage, data.length),
                    count: data.length === -1 ? "-" : data.length,
                  })}
                </Typography>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <IconButton
                    size="sm"
                    color="neutral"
                    variant="outlined"
                    disabled={page === 0}
                    onClick={() => handleChangePage(page - 1)}
                    sx={{ bgcolor: "background.surface" }}
                  >
                    <KeyboardArrowLeftIcon />
                  </IconButton>
                  <IconButton
                    size="sm"
                    color="neutral"
                    variant="outlined"
                    disabled={
                      data.length !== -1
                        ? page >= Math.ceil(data.length / dataPerPage) - 1
                        : false
                    }
                    onClick={() => handleChangePage(page + 1)}
                    sx={{ bgcolor: "background.surface" }}
                  >
                    <KeyboardArrowRightIcon />
                  </IconButton>
                </Box>
              </Box>
            </td>
          </tr>
        </tfoot>
      </Table>
    </Sheet>
  );
}
