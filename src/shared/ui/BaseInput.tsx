import {FC} from "react";
import {BaseInputProps} from "../model/BaseInputTypes";

export const BaseInput:FC<BaseInputProps> = ({type}) => {

    return (
        <input
            type={type}
            className={"border rounded-sm"}
        />
    )
}
