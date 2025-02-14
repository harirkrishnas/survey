"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Container,
  Box,
  Button,
  Typography,
  TextField,
  MenuItem,
  Stepper,
  Step,
  StepLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  FormControlLabel
} from "@mui/material";
import { useDispatch } from "react-redux";
import { setStakeholder, setConsent, setZone } from "../store/surveySlice";

interface FormData {
  consent: boolean;
  name?: string;
  email?: string;
  zone: string;
  response?: string;
  canvasDesign?: string;
}

interface GenericSurveyFormProps {
  stakeholder: string;
}

export default function GenericSurveyForm({ stakeholder }: GenericSurveyFormProps) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState<number>(0);
  const [openThankYou, setOpenThankYou] = useState(false);
  const steps = ["Introduction & Consent", "Survey Questions", "Production Canvas Design"];

  const { control, handleSubmit, register } = useForm<FormData>({
    defaultValues: { consent: false, zone: "" }
  });

  useEffect(() => {
    if (stakeholder) {
      dispatch(setStakeholder(stakeholder));
    }
  }, [stakeholder, dispatch]);

  const onSubmit = (data: FormData) => {
    if (activeStep === 0) {
      if (!data.consent) {
        alert("Consent is required.");
        router.push("/");
        return;
      }
      dispatch(setConsent(true));
      setActiveStep(1);
      return;
    } else if (activeStep === 1) {
      if (!data.zone) {
        alert("Select your zone.");
        return;
      }
      dispatch(setZone(data.zone));
      setActiveStep(2);
      return;
    } else {
      setOpenThankYou(true);
    }
  };

  const handleBack = () => {
    if (activeStep === 0) router.push("/");
    else setActiveStep((prev) => prev - 1);
  };

  const handleCloseThankYou = () => {
    setOpenThankYou(false);
    router.push("/");
  };

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Survey
      </Typography>
      <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Step 0: Introduction & Consent */}
        {activeStep === 0 && (
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h6" gutterBottom>
              Introduction and Consent
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Welcome to our survey. Please read the instructions and provide your consent to proceed.
            </Typography>
            <FormControlLabel
              control={<input type="checkbox" {...register("consent", { required: true })} />}
              label="I consent to participate."
            />
            <Box sx={{ mt: 3 }}>
              <Button type="submit" variant="contained" color="primary">
                Proceed to Survey
              </Button>
            </Box>
          </Box>
        )}

        {/* Step 1: Survey Questions */}
        {activeStep === 1 && (
          <Box>
            <TextField {...register("name")} label="Name" fullWidth sx={{ mb: 2 }} />
            <TextField {...register("email")} label="Email" fullWidth sx={{ mb: 2 }} />
            <Controller
              name="zone"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField {...field} select label="Select Conflict Zone" fullWidth sx={{ mb: 2 }}>
                <MenuItem value="no-conflict">No Conflict Zone</MenuItem>
                <MenuItem value="pre-conflict">Pre-Conflict Zone</MenuItem>
                <MenuItem value="active-conflict">Active Conflict Zone</MenuItem>
                <MenuItem value="post-conflict">Post-Conflict Zone</MenuItem>
              </TextField>
              )}
            />
            <TextField
              {...register("response")}
              label="Your Response"
              fullWidth
              multiline
              rows={3}
              sx={{ mb: 4 }}
            />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Button onClick={handleBack}>Back</Button>
              <Button type="submit" variant="contained" color="primary">
                Next
              </Button>
            </Box>
          </Box>
        )}

        {/* Step 2: Production Canvas Design (Placeholder) */}
        {activeStep === 2 && (
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h6" gutterBottom>
              Production Canvas Design
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              [Placeholder] Design your production process using an interactive canvas.
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Button onClick={handleBack}>Back</Button>
              <Button type="submit" variant="contained" color="primary">
                Submit Survey
              </Button>
            </Box>
          </Box>
        )}
      </form>
      <Dialog open={openThankYou} onClose={handleCloseThankYou}>
        <DialogTitle>Thank You!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Thank you for completing the survey. Your responses have been recorded.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseThankYou}>Close</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

