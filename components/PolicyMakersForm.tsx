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
  // Demographic and Professional Info
  name?: string;
  role?: string;
  age?: number;
  department?: string;
  jurisdiction?: string;
  policyFocus?: string;
  experienceYears?: number;
  // Zone and Connectivity
  zone: string;
  digitalConnectivity?: string;
  // Governance & Infrastructure
  governanceRating?: number;
  regulatoryClarity?: number;
  infrastructureQuality?: number;
  coordinationEffectiveness?: number;
  additionalChallenges?: string;
  // Overall Satisfaction & Feedback
  overallSatisfaction?: number;
  additionalFeedback?: string;
  // Step 2: Production Canvas Design (Placeholder)
  canvasDesign?: string;
}

interface PolicyMakersFormProps {
  stakeholder: string;
}

export default function PolicyMakersForm({ stakeholder }: PolicyMakersFormProps) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState<number>(0);
  const [openThankYou, setOpenThankYou] = useState(false);
  const steps = ["Introduction & Consent", "Survey Questions", "Production Canvas Design"];

  const { control, handleSubmit, register, formState: { errors } } = useForm<FormData>({
    defaultValues: { consentParticipate: false, consentAnonymity: false, zone: "" }
  });

  useEffect(() => {
    if (stakeholder) {
      dispatch(setStakeholder(stakeholder));
    }
  }, [stakeholder, dispatch]);

  const onSubmit = (data: FormData) => {
    if (activeStep === 0) {
      if (!data.consentParticipate || !data.consentAnonymity) {
        alert("Consent required.");
        router.push("/");
        return;
      }
      dispatch(setConsent(true));
      setActiveStep(1);
      return;
    } else if (activeStep === 1) {
      if (!data.zone) {
        alert("Please select your zone.");
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
    if (activeStep === 0) {
      router.push("/");
    } else {
      setActiveStep((prev) => prev - 1);
    }
  };

  const handleCloseThankYou = () => {
    setOpenThankYou(false);
    router.push("/");
  };

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Survey for Municipal & Regional Policy Makers / Government Officials
      </Typography>
      <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <form onSubmit={handleSubmit(onSubmit)}>
        {activeStep === 0 && (
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h6" gutterBottom>
              Introduction and Consent
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Thank you for participating. This survey gathers insights on regulatory frameworks, infrastructure, and governance.
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
              <Button type="submit" variant="contained" color="primary">
                Proceed to Survey
              </Button>
            </Box>
          </Box>
        )}
        {activeStep === 1 && (
          <Box>
            <Typography variant="h6" gutterBottom>
              Survey Questions
            </Typography>
            <Divider sx={{ mb: 2 }} />
            {/* Demographic and Professional Info */}
            <TextField {...register("name")} label="Name (Optional)" fullWidth sx={{ mb: 2 }} />
            <TextField {...register("role", { required: true })} label="Position/Role" fullWidth sx={{ mb: 2 }} error={!!errors.role} helperText={errors.role ? "Required" : ""} />
            <TextField {...register("age", { valueAsNumber: true })} type="number" label="Age" fullWidth sx={{ mb: 2 }} />
            <TextField {...register("department")} label="Department/Agency" fullWidth sx={{ mb: 2 }} />
            <TextField {...register("jurisdiction")} label="Jurisdiction/Region" fullWidth sx={{ mb: 2 }} />
            <TextField {...register("policyFocus")} label="Policy Focus Area" fullWidth sx={{ mb: 2 }} />
            <TextField {...register("experienceYears", { valueAsNumber: true })} type="number" label="Years of Experience" fullWidth sx={{ mb: 4 }} />
            {/* Zone Selection */}
            <Controller
              name="zone"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField {...field} select label="Select Zone" fullWidth helperText="Select your operational zone" sx={{ mb: 4 }}>
                  <MenuItem value="high">High-Intensity Conflict Zone</MenuItem>
                  <MenuItem value="moderate">Moderate Conflict Zone</MenuItem>
                  <MenuItem value="stable">Stable/Low-Conflict Zone</MenuItem>
                </TextField>
              )}
            />
            {/* Governance & Infrastructure */}
            <TextField {...register("digitalConnectivity")} label="Digital Connectivity Status" fullWidth sx={{ mb: 2 }} select>
              <MenuItem value="poor">Poor</MenuItem>
              <MenuItem value="fair">Fair</MenuItem>
              <MenuItem value="good">Good</MenuItem>
              <MenuItem value="excellent">Excellent</MenuItem>
            </TextField>
            <TextField {...register("governanceRating", { valueAsNumber: true })} type="number" label="Rate Governance Effectiveness (1-5)" fullWidth sx={{ mb: 2 }} select>
              {[1,2,3,4,5].map(num=> <MenuItem key={num} value={num}>{num}</MenuItem>)}
            </TextField>
            <TextField {...register("regulatoryClarity", { valueAsNumber: true })} type="number" label="Rate Regulatory Clarity (1-5)" fullWidth sx={{ mb: 2 }} select>
              {[1,2,3,4,5].map(num=> <MenuItem key={num} value={num}>{num}</MenuItem>)}
            </TextField>
            <TextField {...register("infrastructureQuality", { valueAsNumber: true })} type="number" label="Quality of Local Infrastructure (1-5)" fullWidth sx={{ mb: 2 }} select>
              {[1,2,3,4,5].map(num=> <MenuItem key={num} value={num}>{num}</MenuItem>)}
            </TextField>
            <TextField {...register("coordinationEffectiveness", { valueAsNumber: true })} type="number" label="Effectiveness of Coordination (1-5)" fullWidth sx={{ mb: 4 }} select>
              {[1,2,3,4,5].map(num=> <MenuItem key={num} value={num}>{num}</MenuItem>)}
            </TextField>
            <TextField {...register("additionalChallenges")} label="Describe Key Challenges (Optional)" fullWidth multiline rows={2} sx={{ mb: 4 }} />
            <TextField {...register("overallSatisfaction", { valueAsNumber: true })} type="number" label="Overall Satisfaction (1-5)" fullWidth sx={{ mb: 4 }} select>
              {[1,2,3,4,5].map(num=> <MenuItem key={num} value={num}>{num}</MenuItem>)}
            </TextField>
            <TextField {...register("additionalFeedback")} label="Additional Feedback (Optional)" fullWidth multiline rows={2} sx={{ mb: 4 }} />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Button onClick={handleBack}>Back</Button>
              <Button type="submit" variant="contained" color="primary">Next</Button>
            </Box>
          </Box>
        )}
        {activeStep === 2 && (
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h6" gutterBottom>
              Production Canvas Design
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              [Placeholder] Design your production process using an interactive canvas. (Coming soon)
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Button onClick={handleBack}>Back</Button>
              <Button type="submit" variant="contained" color="primary">Submit Survey</Button>
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