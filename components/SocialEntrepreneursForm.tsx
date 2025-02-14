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
  // Section A: Demographic & Contextual Information
  name?: string;
  role?: string;
  age?: number;
  gender?: string;
  education?: string;
  experience?: number;
  digitalLiteracy?: number;
  digitalInstance?: string;
  // Section B: Organizational Profile
  enterpriseName?: string;
  enterpriseType?: string;
  lifecycleStage?: string;
  registered?: string;
  numEmployees?: number;
  revenueRange?: string;
  // Section C: Location & Digital Connectivity
  address?: string;
  zone: string; // Will be one of: no-conflict, pre-conflict, active-conflict, post-conflict
  connectivityStatus?: string;
  // Section D: Conditional Questions for Active Conflict Zone
  disruptionFrequency?: string;
  conflictImpact?: number;
  safetyRating?: number;
  transportReliability?: string;
  governanceEffectiveness?: string;
  infrastructureQuality?: number;
  infrastructureComments?: string;
  // Section D: Conditional Questions for Post-Conflict Zone
  postConflictRestructuring?: string;
  postConflictPartnerships?: string;
  postConflictRecoveryRating?: number;
  postConflictComments?: string;
  // Step 2: Production Canvas Design (Placeholder)
  canvasDesign?: string;
}

interface SocialEntrepreneursFormProps {
  stakeholder: string;
}

export default function SocialEntrepreneursForm({ stakeholder }: SocialEntrepreneursFormProps) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState<number>(0);
  const [openThankYou, setOpenThankYou] = useState(false);
  const steps = ["Introduction & Consent", "Survey Questions", "Production Canvas Design"];

  const { control, handleSubmit, register, watch } = useForm<FormData>({
    defaultValues: {
      consentParticipate: false,
      consentAnonymity: false,
      zone: ""
    }
  });

  // Watch the selected "zone" for conditional logic
  const selectedZone = watch("zone");

  useEffect(() => {
    if (stakeholder) {
      dispatch(setStakeholder(stakeholder));
    }
  }, [stakeholder, dispatch]);

  const onSubmit = (data: FormData) => {
    if (activeStep === 0) {
      // Ensure both consents are provided before proceeding.
      if (!data.consentParticipate || !data.consentAnonymity) {
        alert("Please provide both consent statements to proceed.");
        router.push("/");
        return;
      }
      dispatch(setConsent(true));
      setActiveStep(1);
    } else if (activeStep === 1) {
      if (!data.zone) {
        alert("Please select your conflict zone.");
        return;
      }
      dispatch(setZone(data.zone));
      setActiveStep(2);
    } else {
      // Final submission logic – typically send data to the backend.
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
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Social Entrepreneurs Survey
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
              Introduction & Consent
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Welcome to our survey on Social Entrepreneurship in conflict environments. Please read the instructions carefully and provide your consent to proceed.
            </Typography>
            <FormControlLabel
              control={<Checkbox {...register("consentParticipate", { required: true })} />}
              label="I consent to participate in this survey."
            />
            <FormControlLabel
              control={<Checkbox {...register("consentAnonymity", { required: true })} />}
              label="I agree to the terms regarding anonymity and data usage."
            />
            <Box sx={{ mt: 3 }}>
              <Button type="submit" variant="contained" color="primary">
                Proceed
              </Button>
            </Box>
          </Box>
        )}

        {/* Step 1: Survey Questions */}
        {activeStep === 1 && (
          <Box>
            {/* Section A: Demographic & Contextual Information */}
            <Typography variant="h6" gutterBottom>
              Section A: Demographic & Contextual Information
            </Typography>
            <TextField {...register("name")} label="Name" fullWidth sx={{ mb: 2 }} />
            <TextField {...register("role", { required: true })} label="Your Role" fullWidth sx={{ mb: 2 }} />
            <TextField {...register("age", { valueAsNumber: true })} type="number" label="Age" fullWidth sx={{ mb: 2 }} />
            <TextField {...register("gender")} label="Gender" fullWidth sx={{ mb: 2 }} />
            <TextField {...register("education")} label="Education" fullWidth sx={{ mb: 2 }} />
            <TextField {...register("experience", { valueAsNumber: true })} type="number" label="Years of Experience" fullWidth sx={{ mb: 2 }} />
            <TextField {...register("digitalLiteracy", { valueAsNumber: true })} type="number" label="Digital Literacy Rating (1-5)" fullWidth sx={{ mb: 2 }} select>
              {[1, 2, 3, 4, 5].map(n => (
                <MenuItem key={`dl-${n}`} value={n}>{n}</MenuItem>
              ))}
            </TextField>

            {/* Section B: Organizational Profile */}
            <Typography variant="h6" gutterBottom>
              Section B: Organizational Profile
            </Typography>
            <TextField {...register("enterpriseName", { required: true })} label="Enterprise/Organization Name" fullWidth sx={{ mb: 2 }} />
            <TextField {...register("enterpriseType")} label="Enterprise Type" fullWidth sx={{ mb: 2 }} />
            <TextField {...register("lifecycleStage")} label="Lifecycle Stage" fullWidth sx={{ mb: 2 }} />
            <TextField {...register("registered")} label="Registered (Yes/No)" fullWidth sx={{ mb: 2 }} />
            <TextField {...register("numEmployees", { valueAsNumber: true })} type="number" label="Number of Employees" fullWidth sx={{ mb: 2 }} />
            <TextField {...register("revenueRange")} label="Revenue Range" fullWidth sx={{ mb: 2 }} />

            {/* Section C: Location & Digital Connectivity */}
            <Typography variant="h6" gutterBottom>
              Section C: Location & Digital Connectivity
            </Typography>
            <TextField {...register("address")} label="Address or Region" fullWidth sx={{ mb: 2 }} />
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
            <TextField {...register("connectivityStatus")} label="Digital Connectivity Status" fullWidth sx={{ mb: 2 }} select>
              <MenuItem value="poor">Poor</MenuItem>
              <MenuItem value="fair">Fair</MenuItem>
              <MenuItem value="good">Good</MenuItem>
              <MenuItem value="excellent">Excellent</MenuItem>
            </TextField>

            {/* Section D: Conditional Questions Based on Zone Selection */}
            {selectedZone === "active-conflict" && (
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" gutterBottom>
                  Section D: Active Conflict Context
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <TextField {...register("disruptionFrequency")} label="Frequency of Disruptions" fullWidth sx={{ mb: 2 }} />
                <TextField {...register("conflictImpact", { valueAsNumber: true })} type="number" label="Conflict Impact (1-5)" fullWidth sx={{ mb: 2 }} select>
                  {[1, 2, 3, 4, 5].map(n => (
                    <MenuItem key={`ci-${n}`} value={n}>{n}</MenuItem>
                  ))}
                </TextField>
                <TextField {...register("safetyRating", { valueAsNumber: true })} type="number" label="Safety Rating (1-5)" fullWidth sx={{ mb: 2 }} select>
                  {[1, 2, 3, 4, 5].map(n => (
                    <MenuItem key={`sr-${n}`} value={n}>{n}</MenuItem>
                  ))}
                </TextField>
                <TextField {...register("transportReliability")} label="Transport Reliability" fullWidth sx={{ mb: 2 }} />
                <TextField {...register("governanceEffectiveness")} label="Governance Effectiveness" fullWidth sx={{ mb: 2 }} />
                <TextField {...register("infrastructureQuality", { valueAsNumber: true })} type="number" label="Infrastructure Quality (1-5)" fullWidth sx={{ mb: 2 }} select>
                  {[1, 2, 3, 4, 5].map(n => (
                    <MenuItem key={`iq-${n}`} value={n}>{n}</MenuItem>
                  ))}
                </TextField>
                <TextField {...register("infrastructureComments")} label="Comments on Infrastructure" fullWidth sx={{ mb: 4 }} multiline rows={2} />
              </Box>
            )}
            {selectedZone === "post-conflict" && (
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" gutterBottom>
                  Section D: Post-Conflict Recovery & Transformation
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <TextField {...register("postConflictRestructuring")} label="Institutional Restructuring Observed? (Yes/No)" fullWidth sx={{ mb: 2 }} />
                <TextField {...register("postConflictPartnerships")} label="New Recovery Partnerships Formed? (Yes/No)" fullWidth sx={{ mb: 2 }} />
                <TextField {...register("postConflictRecoveryRating", { valueAsNumber: true })} type="number" label="Recovery Progress Rating (1-5)" fullWidth sx={{ mb: 2 }} select>
                  {[1, 2, 3, 4, 5].map(n => (
                    <MenuItem key={`prr-${n}`} value={n}>{n}</MenuItem>
                  ))}
                </TextField>
                <TextField {...register("postConflictComments")} label="Additional Recovery Comments" fullWidth sx={{ mb: 4 }} multiline rows={2} />
              </Box>
            )}

            {/* Navigation Buttons for Step 1 */}
            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
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

