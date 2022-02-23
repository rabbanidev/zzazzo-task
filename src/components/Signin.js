import React, { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { usePostData } from "../hooks/dataApi";
import { useGlobalContext } from "../hooks/context";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email address.")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

const Signin = () => {
  const [show, setShow] = useState(false);
  const value = useGlobalContext();
  const navigate = useNavigate();
  const { mutateAsync } = usePostData();
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { email, password } = errors;

  const onSubmit = async (data) => {
    const formData = { username: "mor_2314", password: "83r5^_" };
    setSubmitting(true);
    try {
      const res = await mutateAsync({
        path: "/auth/login",
        formData: formData,
      });
      if (res.status === 200) {
        console.log(res.data);
        value.setUser(data.email);
        navigate("/");
        reset();
      }
      console.log("res", res);
    } catch (error) {
      if (error.response) {
        console.log("error.response", error.response);
      } else if (error.request) {
        console.log("error.request", error.request);
      } else {
        console.log("error", error.message);
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="grid grid-cols-5">
      <div className="col-span-2 px-5 pt-20 md:px-10 lg:px-5 xl:px-28">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-xl font-bold mb-2 md:text-4xl lg:mb-6">Signin</h1>
          <div className="mb-5">
            <label className="font-semibold">Email address*</label>
            <input
              className="my-1 px-3 py-2 w-full border border-gray-300 outline-none rounded"
              type="email"
              placeholder="example@gmail.com"
              {...register("email")}
            />
            <p className="text-red-700">{email?.message}</p>
          </div>
          <div className="mb-5">
            <label className="font-semibold">Password*</label>
            <input
              type={show ? "text" : "password"}
              className="my-1 px-3 py-2 w-full border border-gray-300 outline-none rounded"
              placeholder="*****"
              {...register("password")}
            />
            <p className="text-red-700">{password?.message}</p>
          </div>
          <div className="mb-5 flex items-center gap-x-3">
            <input type="checkbox" id="passwordShow" />
            <label
              htmlFor="passwordShow"
              className="cursor-pointer"
              onClick={() => setShow(!show)}
            >
              Show Password
            </label>
          </div>
          <button
            className="w-full px-3 py-2 font-semibold outline-none shadow-sm rounded border border-red-700 bg-red-700 text-white transition hover:bg-white hover:text-red-700"
            disabled={submitting}
          >
            Signin
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
