import {DetailedHTMLProps, HTMLAttributes} from "react";

export type BaseInputProps = DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    type?: string
}
