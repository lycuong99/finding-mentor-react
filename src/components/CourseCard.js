import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "React";

const CourseCard = () => {

    return (
        <Card>
            <CardMedia
                component="img"
                height="140"
                image="https://img-c.udemycdn.com/course/240x135/705264_caa9_11.jpg"
                alt="green iguana"
            />
            <CardContent>
                <Typography variant="h4">
                    Course Name
                </Typography>
            </CardContent>
            <CardActions>
                <Grid container>
                    <Grid item>
                        <Button>Enroll </Button>
                    </Grid>

                    <Grid item>
                        <Typography variant="h4">{`$ ` + 16}</Typography>
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    );
}

export default CourseCard;