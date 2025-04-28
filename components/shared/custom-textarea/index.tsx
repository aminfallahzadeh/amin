"use client";

// IMPORTS
import { useState, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import { CustomTextareaProps } from "./types";
import { Controller, useWatch } from "react-hook-form";
import { X } from "lucide-react";

const CustomTextarea = ({
  name,
  label,
  required,
  disabled,
  isLoading,
  rules,
  setValue,
  control,
  errors,
}: CustomTextareaProps) => {
  // CONSTS
  const currentValue = useWatch({
    control,
    name,
  });

  // STATES
  const [hasValue, setHasValue] = useState<boolean>(!!currentValue);

  // EFFECTS
  useEffect(() => {
    setHasValue(!!currentValue);
  }, [currentValue]);

  // HANDLERS
  const handleRemoveField = () => {
    setValue(name, "");
  };

  // CONTENT

  const content = (
    <div className="relative">
      {errors && (
        <span className="text-xs text-red-500 absolute -top-4 left-0">
          {errors?.[name]?.message as string}
        </span>
      )}

      <Controller
        name={name}
        rules={rules}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Textarea
            value={value}
            onChange={(val) => onChange(val)}
            placeholder={required ? `${label} *` : label}
            disabled={disabled || isLoading}
            error={errors?.[name] ? true : false}
          />
        )}
      />

      {hasValue && (
        <div
          onClick={handleRemoveField}
          className="absolute top-[50%] -translate-y-1/2 right-3 cursor-pointer transition-all ease-in-out active:scale-75 bg-gray-100 dark:bg-gray-800 rounded-full p-1 group"
        >
          <X size={20} />
        </div>
      )}
    </div>
  );
  return content;
};

export default CustomTextarea;
