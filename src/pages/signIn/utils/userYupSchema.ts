import { emailRegex, passwordRegex } from "@/pages/logIn/utils/regexFormValidation";
import * as yup from "yup";

export const userSchema = yup.object({
    name:yup.string().required("Name is required").length(4, "Name should be at least 4 character"),
    email:yup.string().email("Invalid email").required("Email is required").matches(emailRegex, "Invalid email"),
    password:yup.string().required("Password is required").matches(passwordRegex, "Password not secured").length(8, "Password should be at least 8 character"),
    bioText:yup.string(),
})