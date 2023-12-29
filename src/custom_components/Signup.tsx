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

import { useForm } from "react-hook-form";
import { ReloadIcon, EnvelopeOpenIcon } from "@radix-ui/react-icons";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";

import { Alert, AlertTitle } from "@/components/ui/alert";
import Navbar from "./navbar";

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
      <Navbar />
      <div className="  w-full h-screen mx-auto flex items-center justify-center  flex-col  ">
        <Card className=" w-1/4 bg-secondary ">
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
                      <FormLabel className=" text-md text-foreground ">
                        Username
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="enter username" {...field} />
                      </FormControl>
                      <FormMessage className="text-sm text-destructive " />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className=" text-md text-foreground ">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="enter email address" {...field} />
                      </FormControl>
                      <FormMessage className="text-sm text-destructive " />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className=" text-md text-foreground ">
                        Password
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="enter password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-sm text-destructive " />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmPass"
                  render={({ field }) => (
                    <FormItem className="pb-4">
                      <FormLabel className=" text-md text-foreground ">
                        Confirm password
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="re-enter password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-sm text-destructive " />
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
    </>
  );
};

export default Signup;
