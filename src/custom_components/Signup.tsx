import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Wave from "./wave";
import { useForm } from "react-hook-form";
import { ReloadIcon, EnvelopeOpenIcon } from "@radix-ui/react-icons";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";

import { Alert, AlertTitle } from "@/components/ui/alert";

const formSchema = z
  .object({
    userName: z.string().min(6, {
      message: "Username must be at least 6 characters.",
    }),
    email: z.string().email(),
    password: z.string().min(6, {
      message: "password must be at least 6 characters.",
    }),
    confirmPass: z.string().min(6, {
      message: "confirm password must be at least 6 characters.",
    }),
  })
  .refine((data) => data.password === data.confirmPass, {
    path: ["confirmPass"],
    message: "password does not match",
  });

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [res, setResponse] = useState("");
  const [err, setErr] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setIsLoading(true);
    await axios
      .post("http://toodo-api.onrender.com/app/v1/users/signUp", values)
      .then((response) => {
        console.log(response.data);
        setResponse(response.data.message);
      })
      .catch((error) => {
        console.log(error);
        setErr(error.response.data.message);
      });
    setIsLoading(false);
    setTimeout(() => {
      setErr("");
      setResponse("");
    }, 3000);
  }

  return (
    <>
      <div className="flex justify-center items-center mt-12 ">
        <Card className=" w-1/4 ">
          <CardHeader>
            <CardTitle className="text-3xl">Create an account</CardTitle>
            <CardDescription className="text-sm font-medium">
              Enter your email below to create your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-2"
              >
                <FormField
                  control={form.control}
                  name="userName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className=" text-md text-white ">
                        Username
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="enter username" {...field} />
                      </FormControl>
                      <FormMessage className="text-sm text-purple-400 " />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className=" text-md text-white ">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="enter email address" {...field} />
                      </FormControl>
                      <FormMessage className="text-sm text-purple-400 " />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className=" text-md text-white ">
                        Password
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="enter password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-sm text-purple-400 " />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmPass"
                  render={({ field }) => (
                    <FormItem className="pb-4">
                      <FormLabel className=" text-md text-white ">
                        Confirm password
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="re-enter password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-sm text-purple-400 " />
                    </FormItem>
                  )}
                />

                {isLoading ? (
                  <Button disabled className="w-full text-md">
                    {isLoading && (
                      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Please wait
                  </Button>
                ) : (
                  <Button className="w-full text-md">Submit</Button>
                )}
                {res && (
                  <div className=" w-full mx-auto">
                    {" "}
                    <Alert className="text-center flex justify-center relative">
                      <div className="mr-3">
                        <EnvelopeOpenIcon className="w-4 h-4" />
                      </div>
                      <AlertTitle>{res}</AlertTitle>
                    </Alert>
                  </div>
                )}
                {err && (
                  <div className=" w-full mx-auto">
                    {" "}
                    <Alert className="text-center bg-destructive flex justify-center relative">
                      <div className="mr-3">
                        <EnvelopeOpenIcon className="w-4 h-4" />
                      </div>
                      <AlertTitle>{err}</AlertTitle>
                    </Alert>
                  </div>
                )}
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
      <div className=" -mt-8 max-w-full max-h-60 ">
        <Wave />
      </div>
    </>
  );
};

export default Signup;
