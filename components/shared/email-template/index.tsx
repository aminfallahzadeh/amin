// IMPORTS
import * as React from "react";
import { EmailTemplateProps } from "./types";

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  description,
  email,
}) => (
  <div>
    <h1>Hello Amin! This is {name}.</h1>
    <h3>Email address: {email}</h3>

    <p>{description}</p>
  </div>
);
