"use client";

// IMPORTS
import { useForm, FieldValues } from "react-hook-form";
import CustomInput from "../custom-input";
import CustomTextarea from "../custom-textarea";
import { Button } from "@/components/ui/button";
import { requiredRule, emailRule } from "@/lib/constants/rules";

const ContactForm = () => {
  // CONSTS
  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    values: {
      email: "",
      name: "",
      subject: "",
      description: "",
    },
  });

  // HANDLERS
  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
        }),
      });

      const result = await res.json();

      if (res.ok) {
        alert("Email sent successfully!");
        reset();
      } else {
        console.log(result.error);
        alert(result.error || "Failed to send email.");
      }
    } catch (error) {
      console.error("Submit error:", error);
      alert("Something went wrong.");
    }
  };

  // CONTENT
  const content = (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center items-center md:items-start gap-y-5"
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <CustomInput
            name="name"
            label="Name"
            control={control}
            errors={errors}
            required={false}
            setValue={setValue}
          />
        </div>

        <div>
          <CustomInput
            name="email"
            label="Email"
            control={control}
            errors={errors}
            required
            rules={{ ...requiredRule, ...emailRule }}
            setValue={setValue}
          />
        </div>

        <div className="md:col-span-2">
          <CustomInput
            name="subject"
            label="Subject"
            control={control}
            errors={errors}
            required
            rules={requiredRule}
            setValue={setValue}
          />
        </div>

        <div className="md:col-span-2">
          <CustomTextarea
            name="description"
            label="Description"
            control={control}
            errors={errors}
            required
            rules={requiredRule}
            setValue={setValue}
          />
        </div>
      </div>

      <Button type="submit">
        <span>Submit Message</span>
      </Button>
    </form>
  );

  return content;
};

export default ContactForm;
