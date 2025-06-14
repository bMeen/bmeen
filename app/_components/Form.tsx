"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { format } from "date-fns";
import emailjs from "@emailjs/browser";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { motion } from "motion/react";

const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
};

const schema = yup.object({
  firstName: yup.string().required("Provide a name"),
  lastName: yup.string().required("Provide a last name"),
  email: yup
    .string()
    .email("Provide a valid email")
    .required("Provide an email"),
  subject: yup.string().required(),
  message: yup.string().required("Provide more details you feel i should know"),
});

function Form() {
  const { register, handleSubmit, formState, reset } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const { errors, isSubmitting } = formState;

  const onSubmit = async (data: FormValues) => {
    const templateParams = {
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      subject: data.subject,
      message: data.message,
      time: format(new Date(), "dd/MM/yyyy HH:mm:ss"),
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      toast.success("Message sent successfully!");
      reset();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Error sending message. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid lg:grid-cols-2 gap-5">
        <div className="">
          <label htmlFor="firstName">First Name</label>
          <input type="firstName" id="text" {...register("firstName")} />
          <span>{errors.firstName?.message}</span>
        </div>

        <div className="">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" {...register("lastName")} />
          <span>{errors.lastName?.message}</span>
        </div>

        <div className="">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register("email")} />
          <span>{errors.email?.message}</span>
        </div>

        <div className="">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" {...register("subject")} />
          <span>{errors.subject?.message}</span>
        </div>

        <div className=" col-span-2">
          <label htmlFor="message">Message</label>
          <textarea id="message" {...register("message")}></textarea>
          <span>{errors.message?.message}</span>
        </div>
      </div>

      <motion.button
        transition={{ type: "tween", duration: 0.2 }}
        whileTap={{ scale: 0.85 }}
        className="p-4 w-full rounded-full mt-5 bg-orange-secondary flex justify-center items-center gap-2"
      >
        {isSubmitting && <Loader2 className="animate-spin" />}
        Submit
      </motion.button>
    </form>
  );
}

export default Form;
