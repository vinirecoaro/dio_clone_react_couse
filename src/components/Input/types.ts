import { InputHTMLAttributes, ReactNode } from "react";

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    leftIcon?: ReactNode;
    name: string;
    control: any;
    errorMessage?: string;
}

export interface IDefaultMargin {
    margin? : number
}