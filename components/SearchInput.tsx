"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React from "react";
import { useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";
// import { Input } from "@/components/ui/input";

const fromSchema = z.object({
	input: z.string().min(3).max(50),
});

export default function SearchInput() {
	const router = useRouter();

	const form = useForm<z.infer<typeof fromSchema>>({
		resolver: zodResolver(fromSchema),
		defaultValues: {
			input: "",
		},
	});
	

	function onSubmit(values: z.infer<typeof fromSchema>) {
	

		router.push(`/search/${values.input}`);
		form.reset();
	}
	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="input"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input placeholder="Search..." {...field} />
							</FormControl>
						</FormItem>
					)}
				/>
			</form>
		</Form>
	);
}
