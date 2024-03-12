import * as Yup from "yup";

export const User = Yup.object({
    name: Yup.string().min(4).max(25).required("Please enter Name"),
    email: Yup.string().email().required("Please enter Email"),
    message: Yup.string().min(7).required("Please enter your Message"),
});