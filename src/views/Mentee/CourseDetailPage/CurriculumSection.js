import { Grid } from "@mui/material";
import Section from "../../../components/Curriculumn/Section";

const CurriculumSection = (props) => {
    const curriculum = props.curriculum;

    return (
        curriculum.map((section, index) => (
            <Grid item key={index}>
                <Section data={section}
                    index={index + 1}
                />
            </Grid>
        ))
    )
}

export default CurriculumSection;