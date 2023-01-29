import React from 'react';
import { FaRegEyeSlash, FaEye } from 'react-icons/fa';

type inputTypes =
	| 'text'
	| 'textarea'
	| 'email'
	| 'color'
	| 'password'
	| 'date'
	| 'week';

type InputProps = {
	type: inputTypes;
	name: string;
	id: string;
	cols?: number;
	rows?: number;
	label?: string;
	placeholder?: string;
	minLength?: number;
	maxLength?: number;
	max?: number;
	min?: number;
	pattern?: string;
	value?: string;
	required?: boolean;
	defaultValue?: string;
	onChange?: () => void;
	onBlur?: () => void;
};

const Input: React.FunctionComponent<InputProps> = (props) => {
	const [open, setOpen] = React.useState<boolean>(false);

	const toggleInput = () => {
		setOpen(!open);
	};
	return (
		<div className='w-full'>
			{props.label ? <label htmlFor={props.name}>{props.label}</label> : null}
			{props.type === 'password' ? (
				<div className='flex border px-2 w-full rounded'>
					<input
						type={open ? 'text' : 'password'}
						placeholder={props.placeholder}
						pattern={props.pattern}
						name={props.name}
						id={props.id}
						onChange={props.onChange}
						onBlur={props.onBlur}
						value={props.value}
						required={props.required}
						defaultValue={props.defaultValue}
                        className="flex-1 border-none outline-none text-lg w-full rounded-md px-4 py-2"
					/>
					<button onClick={toggleInput} className="flex items-center justify-center">
						{open ? <FaEye /> : <FaRegEyeSlash />}
					</button>
				</div>
			) : props.type === 'textarea' ? (
				<div></div>
			) : (
				<div className='w-full'>
                    <input
						type={props.type}
						placeholder={props.placeholder}
						pattern={props.pattern}
						name={props.name}
						id={props.id}
						onChange={props.onChange}
						onBlur={props.onBlur}
						value={props.value}
						required={props.required}
						defaultValue={props.defaultValue}
                        className="flex-1 border outline-none text-lg w-full rounded-md px-4 py-2"
					/>
                </div>
			)}
		</div>
	);
};

export default Input;
