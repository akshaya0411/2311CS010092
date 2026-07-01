import {
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@mui/material";

export default function FilterBar({
  value,
  onChange
}) {
  return (
    <FormControl fullWidth>
      <InputLabel>Type</InputLabel>

      <Select
        value={value}
        label="Type"
        onChange={(e) =>
          onChange(e.target.value)
        }
      >
        <MenuItem value="">
          All
        </MenuItem>

        <MenuItem value="Placement">
          Placement
        </MenuItem>

        <MenuItem value="Result">
          Result
        </MenuItem>

        <MenuItem value="Event">
          Event
        </MenuItem>
      </Select>
    </FormControl>
  );
}