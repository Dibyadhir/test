import React, { useState } from "react";
import { TextField, Button, Typography, Box, Stepper, Step, StepLabel, Paper } from "@mui/material";

const steps = [
    "Enter your First Name",
    "Enter your Last Name",
    "Provide your Email Address",
    "Create a Password",
    "Confirm your Password",
];

function RegisterForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [activeStep, setActiveStep] = useState(0);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleNext = () => {
        if (validateStep()) {
            setActiveStep((prevStep) => prevStep + 1);
        }
    };

    const validateStep = () => {
        const newErrors = {};
        switch (activeStep) {
            case 0:
                if (!formData.firstName) newErrors.firstName = "First Name is required";
                break;
            case 1:
                if (!formData.lastName) newErrors.lastName = "Last Name is required";
                break;
            case 2:
                if (!formData.email) newErrors.email = "Email is required";
                else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
                break;
            case 3:
                if (!formData.password) newErrors.password = "Password is required";
                else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters long";
                break;
            case 4:
                if (formData.password !== formData.confirmPassword) {
                    newErrors.confirmPassword = "Passwords do not match";
                }
                break;
            default:
                break;
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (activeStep === steps.length - 1 && validateStep()) {
            alert("Registration Successful!");
            // Process form data here
        }
    };

    return (
        <Box sx={{ maxWidth: 500, margin: "auto", mt: 5 }}>
            <Typography variant="h4" gutterBottom textAlign={'center'}>
                WaxaTalk Registration
            </Typography>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Paper
                    elevation={10}
                    sx={{
                        p: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        borderRadius: 2,
                        height: '180px',
                        // bgcolor: '#0490C8', 
                        border: '2px solid ',
                        backdropFilter: 'blur(1px)',
                    }}
                >
                    {activeStep === 0 && (
                        <TextField
                            label="First Name"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            error={!!errors.firstName}
                            helperText={errors.firstName || "Enter your first name as per official documents."}
                        />
                    )}

                    {activeStep === 1 && (
                        <TextField
                            label="Last Name"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            error={!!errors.lastName}
                            helperText={errors.lastName || "Enter your last name as it appears in official records."}
                        />
                    )}

                    {activeStep === 2 && (
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            error={!!errors.email}
                            helperText={errors.email || "Use a valid email format (e.g., user@example.com)."}
                        />
                    )}

                    {activeStep === 3 && (
                        <TextField
                            label="Password"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            error={!!errors.password}
                            helperText={errors.password || "Choose a secure password (at least 6 characters)."}
                        />
                    )}

                    {activeStep === 4 && (
                        <TextField
                            label="Confirm Password"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            name="confirmPassword"
                            type="password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            error={!!errors.confirmPassword}
                            helperText={errors.confirmPassword || "Re-enter your password to confirm."}
                        />
                    )}

                    {activeStep < steps.length - 1 ? (
                        <Button
                            variant="contained"
                            color="primary"
                            
                            sx={{ mt: 3 }}
                            onClick={handleNext}
                        >
                            Next
                        </Button>
                    ) : (
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            
                            sx={{ mt: 3 }}
                        >
                            Register
                        </Button>
                    )}
                </Paper>
            </Box>

        </Box>
    );
}

export default RegisterForm;
