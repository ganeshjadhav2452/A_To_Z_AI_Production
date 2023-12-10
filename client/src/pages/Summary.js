import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
    Box,
    Typography,
    useTheme,
    useMediaQuery,
    TextField,
    Button,
    Alert,
    Collapse,
    Card,
} from "@mui/material";
import useCallApi from "../customHooks/useCallApi";

const Summary = () => {
    console.log('summary component rendered')
    // useCallApi is a custome hook used for api calling instead of repeating the logic again and again
    const [apiData, apiCallHandler, error] = useCallApi("");
    const theme = useTheme();

    //media
    const isNotMobile = useMediaQuery("(min-width: 1000px)");
    // states
    const [text, settext] = useState("");



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            apiCallHandler("/api/v1/openai/summary", text);


        } catch (err) {
            console.log(err);
        }
    };
    return (
        <Box
            width={isNotMobile ? "40%" : "80%"}
            p={"2rem"}
            m={"2rem auto"}
            borderRadius={5}
            sx={{ boxShadow: 5 }}
            backgroundColor={theme.palette.background.alt}
        >
            <Collapse in={error}>
                <Alert severity="error" sx={{ mb: 2 }}>
                    {error}
                </Alert>
            </Collapse>
            <form onSubmit={handleSubmit}>
                <Typography variant="h3">Summarize Text</Typography>

                <TextField
                    placeholder="add your text"
                    type="text"
                    multiline={true}
                    required
                    margin="normal"
                    fullWidth
                    value={text}
                    onChange={(e) => {
                        settext(e.target.value);
                    }}
                />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    size="large"
                    sx={{ color: "white", mt: 2 }}
                >
                    Submit
                </Button>
                <Typography mt={2}>
                    not this tool ? <Link to="/">GO BACK</Link>
                </Typography>
            </form>

            {apiData ? (
                <Card
                    sx={{
                        mt: 4,
                        border: 1,
                        boxShadow: 0,
                        height: "500px",
                        borderRadius: 5,
                        borderColor: "natural.medium",
                        bgcolor: "background.default",
                    }}
                >
                    <Typography p={2}>{apiData}</Typography>
                </Card>
            ) : (
                <Card
                    sx={{
                        mt: 4,
                        border: 1,
                        boxShadow: 0,
                        height: "500px",
                        borderRadius: 5,
                        borderColor: "natural.medium",
                        bgcolor: "background.default",
                    }}
                >
                    <Typography
                        variant="h5"
                        color="natural.main"
                        sx={{
                            textAlign: "center",
                            verticalAlign: "middel",
                            lineHeight: "450px",
                        }}
                    >
                        Summary Will Apprea Here
                    </Typography>
                </Card>
            )}
        </Box>
    );
};

export default Summary;
