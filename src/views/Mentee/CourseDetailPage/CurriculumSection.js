import { Grid } from "@mui/material";
import { useEffect } from "react";
import Section from "../../../components/Curriculumn/Section";

import { getCurriculum } from '../../../ultils';

const CurriculumSection = (props) => {
    const curriculum = props.curriculum;

    return (
        <div >
            <Grid container direction="column" rowGap={3} sx={{ padding: '2em' }} >
                {
                    curriculum ?
                        curriculum?.length !== 0 ?
                            curriculum.map((section, index) => (
                                <Grid item key={index}>
                                    <Section data={section}
                                        index={index + 1}
                                    />
                                </Grid>
                            )) : "No Curriculum" : "Loading"
                }
            </Grid>
        </div>
    );
}

export default CurriculumSection;