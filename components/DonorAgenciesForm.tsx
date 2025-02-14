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
  // Basic Agency Info
  agencyName?: string;
  contactPerson?: string;
  role?: string;
  yearsOfExperience?: number;
  // Investment and Funding Criteria
  investmentCriteria?: string;
  zone: string;
  fundingFocus?: string;
  processEfficiency?: number;
  digitalInnovationRating?: number;
  impactAssessment?: number;
  coordinationMechanisms?: string;
  // Overall Satisfaction & Feedback
  overallSatisfaction?: number;
  additionalFeedback?: string;
  // Step 2: Production Canvas Design (Placeholder)
  canvasDesign?: string;
}

interface DonorAgenciesFormProps {
  stakeholder: string;
}

export default function DonorAgenciesForm({ stakeholder }: DonorAgenciesFormProps) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState<number>(0);
  const [openThankYou, setOpenThankYou] = useState(false);
  const steps = ["Introduction & Consent", "Survey Questions", "Production Canvas Design"];

  const {
    control,
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<FormData>({
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
        Survey for Donor Agencies & Financial Institutions
      </Typography>
      <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
        {steps.map((label) => (
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
              Thank you for participating in our survey on funding strategies to promote digital innovation and infrastructural support.
            </Typography>
            <FormControlLabel
              control={<Checkbox {...register("consentParticipate", { required: true })} />}
              label="I consent to participate."
            />
            <FormControlLabel
              control={<Checkbox {...register("consentAnonymity", { required: true })} />}
              label="I understand that responses will remain confidential."
            />
            <Box sx={{ mt: 3 }}>
              <Button variant="contained" color="primary" type="submit">
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
            <TextField {...register("agencyName")} label="Agency/Institution Name" fullWidth sx={{ mb: 2 }} />
            <TextField {...register("contactPerson")} label="Contact Person" fullWidth sx={{ mb: 2 }} />
            <TextField
              {...register("role", { required: true })}
              label="Your Role"
              fullWidth
              sx={{ mb: 2 }}
              error={!!errors.role}
              helperText={errors.role ? "Required" : ""}
            />
            <TextField
              {...register("yearsOfExperience", { valueAsNumber: true })}
              type="number"
              label="Years of Funding Experience"
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField {...register("investmentCriteria")} label="Key Investment Criteria" fullWidth sx={{ mb: 2 }} multiline rows={2} />
            <Controller
              name="zone"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  select
                  label="Select Operational Zone"
                  fullWidth
                  helperText="Select your conflict exposure zone"
                  sx={{ mb: 2 }}
                >
                  <MenuItem value="no-conflict">No Conflict Zone</MenuItem>
                  <MenuItem value="pre-conflict">Pre-Conflict Zone</MenuItem>
                  <MenuItem value="active-conflict">Active Conflict Zone</MenuItem>
                  <MenuItem value="post-conflict">Post-Conflict Zone</MenuItem>
                </TextField>
              )}
            />
            <TextField {...register("fundingFocus")} label="Primary Funding Focus Area" fullWidth sx={{ mb: 2 }} select>
              <MenuItem value="digital-innovation">Digital Innovation</MenuItem>
              <MenuItem value="infrastructure">Infrastructure Support</MenuItem>
              <MenuItem value="social-entrepreneurship">Social Entrepreneurship</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </TextField>
            <TextField
              {...register("processEfficiency", { valueAsNumber: true })}
              type="number"
              label="Rate Process Efficiency (1-5)"
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
              {...register("digitalInnovationRating", { valueAsNumber: true })}
              type="number"
              label="Digital Innovation Rating (1-5)"
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
              {...register("impactAssessment", { valueAsNumber: true })}
              type="number"
              label="Impact Assessment (1-5)"
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
              {...register("coordinationMechanisms")}
              label="Inter-Agency Coordination (Describe)"
              fullWidth
              sx={{ mb: 2 }}
              multiline
              rows={2}
            />
            <TextField
              {...register("overallSatisfaction", { valueAsNumber: true })}
              type="number"
              label="Overall Satisfaction (1-5)"
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
            <TextField {...register("additionalFeedback")} label="Additional Feedback" fullWidth sx={{ mb: 4 }} multiline rows={2} />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Button onClick={handleBack}>Back</Button>
              <Button type="submit" variant="contained" color="primary">
                Next
              </Button>
            </Box>
          </Box>
        )}
        {activeStep === 2 && (
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h6" gutterBottom>
              Production Canvas Design
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              [Placeholder] In this section, design your production process using an interactive canvas. (Coming Soon)
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