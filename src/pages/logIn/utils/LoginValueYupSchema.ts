import { emailRegex, passwordRegex } from "./regexFormValidation";
import * as yup from "yup";

export const loginValuesYupSchema = yup.object({
    email:yup.string().required("Email is required").matches(emailRegex, "Imail not valid"),
    password:yup.string().required("Password is required")
    //.matches(passwordRegex, "Check your password").length(8, "Check your password")
})