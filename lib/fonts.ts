import { Pacifico, Gloria_Hallelujah, Roboto_Flex } from 'next/font/google';

export const pacifico = Pacifico({
    subsets: ['latin'],
    variable: '--font-pacifico',
    weight: ['400'],
    display: 'swap',
})

export const gloriaHallelujah = Gloria_Hallelujah({
    subsets: ['latin'],
    variable: '--font-gloria-hallelujah',
    weight: ['400'],
    display: 'swap',
})

export const robotoFlex = Roboto_Flex({
    subsets: ['latin'],
    variable: '--font-roboto-flex',
    weight: ['400', '100', '200', '600'],
    display: 'swap',
})
