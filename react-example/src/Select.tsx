interface Props {
  options: string[];
  label: string;
  onChange: (value: string) => void;
}

export const Select = (props: Props) => {
  return (
    <select className="select" onChange={(e) => props.onChange(e.target.value)}>
      <option value="">{props.label}</option>;
      {props.options.map((opt) => {
        return (
          <option key={opt} value={opt}>
            {opt}
          </option>
        );
      })}
    </select>
  );
};
