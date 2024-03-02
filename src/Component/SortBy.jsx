import { Select, FormControl, InputLabel, MenuItem, Box } from '@mui/material'

function ShortBy({ handleChange, shortBy }) {
    return (
        <>
        <Box sx={{ minWidth: 200 }}>
            <FormControl>
                <InputLabel id="demo-simple-select-label">Options</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={shortBy}
                    label="ShortBy"
                    onChange={handleChange}
                >
                    <MenuItem value={"relevancy"}>Relevancy</MenuItem>
                    <MenuItem value={"popularity"}>Popularity</MenuItem>
                    <MenuItem value={"publishedAt"}>Latest</MenuItem>
                </Select>
            </FormControl>
        </Box>
        </>
    )
}
export default ShortBy;