"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Container,
  Box,
  Button,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Checkbox,
  FormControlLabel,
  TextField,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Divider
} from "@mui/material";
import { useDispatch } from "react-redux";
import { setStakeholder, setConsent, setZone } from "../store/surveySlice";

interface FormData {
  // Step 0: Consent
  consentParticipate: boolean;
  consentAnonymity: boolean;
  // Section A: Demographic & Organizational Info
  name?: string;
  role?: string;
  companyName?: string;
  // Section B: Platform & Service Details
  platformType?: string; // E.g. E-commerce, SaaS, IT Services, etc.
  servicesOffered?: string;
  // Section C: Digital Performance & Cybersecurity
  cybersecurityProtocols?: string;
  platformPerformanceRating?: number; // Scale 1 to 5
  digitalTransformationLevel?: number; // Scale 1 to 5
  // Section D: Zone and Operational Context
  zone: string;
  connectivityStatus?: string;
  // Section E: Feedback and Future Plans
  additionalComments?: string;
  // Step 2: Production Canvas Design (Placeholder)
  canvasDesign?: string;
}

interface DigitalPlatformProvidersFormProps {
  stakeholder: string;
}

export default function DigitalPlatformProvidersForm({ stakeholder }: DigitalPlatformProvidersFormProps) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState<number>(0);
  const [openThankYou, setOpenThankYou] = useState(false);
  const steps = ["Introduction & Consent", "Survey Questions", "Production Canvas Design"];

  const { control, handleSubmit, register } = useForm<FormData>({
    defaultValues: {
      consentParticipate: false,
      consentAnonymity: false,
      zone: ""
    }
  });

  useEffect(() => {
    if (stakeholder) {
      dispatch(setStakeholder(stakeholder));
    }
  }, [stakeholder, dispatch]);

  const onSubmit = (data: FormData) => {
    if (activeStep === 0) {
      if (!data.consentParticipate || !data.consentAnonymity) {
        alert("Consent is required.");
        router.push("/");
        return;
      }
      dispatch(setConsent(true));
      setActiveStep(1);
      return;
    } else if (activeStep === 1) {
      if (!data.zone) {
        alert("Please select your operational zone.");
        return;
      }
      dispatch(setZone(data.zone));
      setActiveStep(2);
      return;
    } else if (activeStep === 2) {
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
        Survey for Digital Platform Providers & IT Service Companies
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
              Thank you for participating in our survey on digital platforms and IT services. Your insights on technology adoption, platform performance, and cybersecurity protocols are vital.
            </Typography>
            <FormControlLabel
              control={<Checkbox {...register("consentParticipate", { required: true })} />}
              label="I consent to participate."
            />
            <FormControlLabel
              control={<Checkbox {...register("consentAnonymity", { required: true })} />}
              label="I understand that my responses will remain confidential."
            />
            <Box sx={{ mt: 3 }}>
              <Button variant="contained" color="primary" type="submit">
                Proceed to Survey
              </Button>
            </Box>
          </Box>
        )}

        {/* Step 1: Survey Questions */}
        {activeStep === 1 && (
          <Box>
            <Typography variant="h6" gutterBottom>
              Survey Questions
            </Typography>
            <Divider sx={{ mb: 2 }} />
            {/* Demographic & Organizational Info */}
            <TextField {...register("name")} label="Name (Optional)" fullWidth sx={{ mb: 2 }} />
            <TextField {...register("role", { required: true })} label="Your Role" fullWidth sx={{ mb: 2 }} />
            <TextField {...register("companyName", { required: true })} label="Company/Organization Name" fullWidth sx={{ mb: 2 }} />
            {/* Platform & Service Details */}
            <TextField {...register("platformType")} label="Type of Platform (e.g., E-commerce, SaaS, IT Services)" fullWidth sx={{ mb: 2 }} />
            <TextField {...register("servicesOffered")} label="Services Offered" fullWidth sx={{ mb: 2 }} multiline rows={2} />
            {/* Digital Performance & Cybersecurity */}
            <TextField {...register("cybersecurityProtocols")} label="Cybersecurity Protocols (Describe)" fullWidth sx={{ mb: 2 }} multiline rows={2} />
            <TextField
              {...register("platformPerformanceRating", { valueAsNumber: true })}
              type="number"
              label="Platform Performance Rating (1-5)"
              fullWidth
              sx={{ mb: 2 }}
              select
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <MenuItem key={num} value={num}>
                  {num}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              {...register("digitalTransformationLevel", { valueAsNumber: true })}
              type="number"
              label="Digital Transformation Level (1-5)"
              fullWidth
              sx={{ mb: 2 }}
              select
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <MenuItem key={num} value={num}>
                  {num}
                </MenuItem>
              ))}
            </TextField>
            {/* Zone Selection */}
            <Controller
              name="zone"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField {...field} select label="Select Operational Zone" fullWidth helperText="Select your conflict exposure zone" sx={{ mb: 2 }}>
                  <MenuItem value="no-conflict">No Conflict Zone</MenuItem>
                  <MenuItem value="pre-conflict">Pre-Conflict Zone</MenuItem>
                  <MenuItem value="active-conflict">Active Conflict Zone</MenuItem>
                  <MenuItem value="post-conflict">Post-Conflict Zone</MenuItem>
                </TextField>
              )}
            />
            <TextField {...register("connectivityStatus")} label="Digital Connectivity Status" fullWidth sx={{ mb: 2 }} select>
              <MenuItem value="poor">Poor</MenuItem>
              <MenuItem value="fair">Fair</MenuItem>
              <MenuItem value="good">Good</MenuItem>
              <MenuItem value="excellent">Excellent</MenuItem>
            </TextField>
            {/* Additional Feedback */}
            <TextField {...register("additionalComments")} label="Additional Comments or Suggestions" fullWidth sx={{ mb: 4 }} multiline rows={2} />
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
              [Placeholder] In this section, you will design your production process using an interactive canvas. (Component coming soon.)
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
