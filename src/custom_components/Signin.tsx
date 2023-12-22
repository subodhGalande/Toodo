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

import { Alert, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { ReloadIcon, Cross1Icon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
import Wave from "./wave";

const formSchema = z.object({
  user: z.string().email(),
  password: z.string().min(6, {
    message: "password must be at least 6 characters.",
  }),
});

const Signin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setIsLoading(true);
    await axios
      .post("https://toodo-api.onrender.com/app/v1/users/login", values)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response.data.message);
        setErr(error.response.data.message);
      });
    setIsLoading(false);
    setTimeout(() => {
      setErr("");
    }, 3000);
  }

  return (
    <>
      <div className="flex justify-center items-center mt-12 ">
        <Card className=" w-1/4 ">
          <CardHeader>
            <CardTitle className="text-3xl">Sign In</CardTitle>
            <CardDescription className="text-sm font-medium">
              Continue with your account
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
                  name="user"
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
                    <FormItem className="pb-2">
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
                      <FormMessage className="text-sm  text-purple-400 " />
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
                  <Button className="w-full  text-md">Submit</Button>
                )}
                {err && (
                  <div className=" w-full mx-auto">
                    {" "}
                    <Alert className="text-center bg-destructive flex justify-center relative">
                      <div className="mr-3">
                        <Cross1Icon className="w-4 h-4" />
                      </div>
                      <AlertTitle>{err}</AlertTitle>
                    </Alert>
                  </div>
                )}
              </form>
            </Form>
            <h2 className=" mx-auto text-center mt-5">Or</h2>
            <Link to="/Signup">
              {" "}
              <Button
                variant={"outline"}
                className="w-full border-primary font-bold border-2 mt-5 text-primary text-md"
              >
                SIGN UP
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* <div className=" h-40 mx-auto w-96 flex flex-row border border-solid border-gray-10 overflow-hidden">
        {" "}
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam est
          blanditiis ut quisquam minima aspernatur hic quod, alias similique
          error sed omnis consequuntur vero! Nulla, commodi? Eveniet cum
          deleniti laudantium.
        </div>{" "}
        <img className=" relative inset-10 rounded-3xl " src={one} alt="" />{" "}
      </div> */}

      <footer className=" bottom-0  ">
        <Wave />
      </footer>
    </>
  );
};

export default Signin;
