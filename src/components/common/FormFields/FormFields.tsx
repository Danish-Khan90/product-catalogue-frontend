import sharedStyles from "../../../styles/shared.module.css";

interface FormFieldProps {
  label: string;
  id: string;
  name: string;
  value: string | number;
  type?: "text" | "number" | "url" | "textarea";
  placeholder?: string;
  required?: boolean;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  step?: string; // for decimals
  min?: string;
  isAutofocus?: boolean;
}

const FormField = ({
  label,
  id,
  name,
  value,
  type = "text",
  placeholder,
  required,
  onChange,
  step,
  min,
  isAutofocus,
}: FormFieldProps) => {
  return (
    <div className={sharedStyles.field}>
      <label htmlFor={id}>{label}</label>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          required={required}
          onChange={onChange}
          autoFocus={isAutofocus}
        />
      ) : (
        <input
          id={id}
          name={name}
          value={value}
          type={type}
          placeholder={placeholder}
          required={required}
          step={step}
          min={min}
          onChange={onChange}
          autoFocus={isAutofocus}
        />
      )}
    </div>
  );
};

export default FormField;
