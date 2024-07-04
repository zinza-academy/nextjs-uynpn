// ItemStepper.tsx
import { Stepper, Step, StepLabel } from "@mui/material";

interface ItemStepperProps {
  activeStep: number;
  steps: string[];
}

const ItemStepper: React.FC<ItemStepperProps> = ({ activeStep, steps }) => {
  return (
    <Stepper activeStep={activeStep} alternativeLabel>
      {steps.map((label, index) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default ItemStepper;
