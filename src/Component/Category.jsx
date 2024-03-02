import { Stack, Button } from '@mui/material'
function Category({ changeCategory }) {
    let category = ["business", "entertainment", "general", "health", "science", "sports"]
    return (
        <div>
           
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
            >      {category.map((categorys, index) => {
                    return <Button variant="contained" disableElevation key={index} onClick={() => changeCategory(categorys)} className='category'>{categorys}</Button>
                })}
            </Stack>
        </div>
    )
}

export default Category