'use server';

import { z } from "zod";
import { loginSchema } from "../schema"
import { log } from "console";
import { sleep } from "../utils";

// for testing error
// const loginSchema1 = loginSchema.extend({
//     bad: z.string().min(10)
// })

export const loginActon = async (values: z.infer<typeof loginSchema>) => {
    try {
        if (process.env.NODE_ENV !== 'production') await sleep(1000)
        // const validated = loginSchema1.parse(values)
        const validated = loginSchema.parse(values)
        console.log('validated', validated)
    } catch (e) {
        throw new Error('Invalid input')
    }

}

