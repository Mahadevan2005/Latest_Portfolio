import FilterPicker from "./FilterPicker";

interface TechnologyPickerProps {
  value: string;
  technologies: string[];
  counts: Record<string, number>;
  total: number;
  onChange: (value: string) => void;
}

export default function TechnologyPicker({ value, technologies, counts, total, onChange }: TechnologyPickerProps) {
  return <FilterPicker
    value={value}
    items={technologies}
    counts={counts}
    total={total}
    label="Technology"
    allLabel="All technologies"
    searchPlaceholder="Find a technology…"
    itemName="project"
    onChange={onChange}
  />;
}
