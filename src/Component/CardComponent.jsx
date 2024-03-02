import {Card, Typography, CardContent, CardMedia} from '@mui/material';
function CardComponent({newsItem}) {

    return (
        <>
        <Card variant="outlined">
              <CardMedia
                component="img"
                height="140"
                image={newsItem.urlToImage}
                alt="green iguana"
              />
            </Card>
            <CardContent>
              <Typography variant="h5" component="h5">
                {newsItem.title}
              </Typography>
              <Typography variant="h6" component="h6">
                {newsItem.publishedAt}
              </Typography>
              <Typography variant="p" component="p">
                {newsItem.description}
              </Typography>
            </CardContent>
        </>
    )
}
export default CardComponent