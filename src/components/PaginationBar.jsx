import { Pagination } from "@mui/material";

export default function PaginationBar({
  page,
  setPage
}) {
  return (
    <Pagination
      count={10}
      page={page}
      onChange={(e, value) =>
        setPage(value)
      }
    />
  );
}