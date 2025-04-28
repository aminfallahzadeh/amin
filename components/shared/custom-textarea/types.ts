// IMPORTS
import {
  UseFormReturn,
  RegisterOptions,
  FieldErrors,
  FieldValues,
} from "react-hook-form";

export type CustomTextareaProps = {
  label: string;
  name: string;
  required: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  isClearable?: boolean;
  rules?: RegisterOptions;
  control: UseFormReturn["control"];
  errors?: FieldErrors<FieldValues>;
  setValue: UseFormReturn["setValue"];
};
