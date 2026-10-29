import { Check, ChevronDown, Search, X } from "lucide-react";
import { useEffect, useId, useMemo, useRef, useState } from "react";

interface FilterPickerProps {
  value: string;
  items: string[];
  counts: Record<string, number>;
  total: number;
  label: string;
  allLabel: string;
  searchPlaceholder: string;
  itemName: string;
  onChange: (value: string) => void;
  className?: string;
  hideLabel?: boolean;
}

export default function FilterPicker({
  value,
  items,
  counts,
  total,
  label,
  allLabel,
  searchPlaceholder,
  itemName,
  onChange,
  className = "",
  hideLabel = false,
}: FilterPickerProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [highlighted, setHighlighted] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const listboxId = useId();

  const options = useMemo(() => [
    { value: "", label: allLabel, count: total },
    ...items.map(item => ({ value: item, label: item, count: counts[item] })),
  ], [allLabel, counts, items, total]);

  const visibleOptions = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return normalized ? options.filter(option => option.label.toLowerCase().includes(normalized)) : options;
  }, [options, query]);

  const selected = options.find(option => option.value === value) ?? options[0];
  const countLabel = (count: number) => `${count} ${itemName}${count === 1 ? "" : "s"}`;

  useEffect(() => {
    if (!open) return;
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", closeOnOutsideClick);
    return () => document.removeEventListener("pointerdown", closeOnOutsideClick);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    setQuery("");
    setHighlighted(Math.max(0, options.findIndex(option => option.value === value)));
    requestAnimationFrame(() => searchRef.current?.focus());
  }, [open, options, value]);

  useEffect(() => {
    if (highlighted >= visibleOptions.length) setHighlighted(Math.max(0, visibleOptions.length - 1));
  }, [highlighted, visibleOptions.length]);

  const choose = (nextValue: string) => {
    onChange(nextValue);
    setOpen(false);
    requestAnimationFrame(() => triggerRef.current?.focus());
  };

  const handleNavigation = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setHighlighted(current => Math.min(current + 1, visibleOptions.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setHighlighted(current => Math.max(current - 1, 0));
    } else if (event.key === "Home") {
      event.preventDefault();
      setHighlighted(0);
    } else if (event.key === "End") {
      event.preventDefault();
      setHighlighted(Math.max(0, visibleOptions.length - 1));
    } else if (event.key === "Enter" && visibleOptions[highlighted]) {
      event.preventDefault();
      choose(visibleOptions[highlighted].value);
    } else if (event.key === "Escape") {
      event.preventDefault();
      setOpen(false);
      triggerRef.current?.focus();
    }
  };

  return <div className={`project-select technology-picker ${className}`.trim()} ref={rootRef}>
    <span className={hideLabel ? "sr-only" : "control-label"} id={`${listboxId}-label`}>{label}</span>
    <button
      ref={triggerRef}
      type="button"
      className="technology-trigger"
      aria-haspopup="listbox"
      aria-expanded={open}
      aria-controls={listboxId}
      aria-labelledby={`${listboxId}-label ${listboxId}-value`}
      onClick={() => setOpen(current => !current)}
      onKeyDown={event => {
        if (["ArrowDown", "ArrowUp", "Enter", " "].includes(event.key) && !open) {
          event.preventDefault();
          setOpen(true);
        } else if (event.key === "Escape" && open) {
          event.preventDefault();
          setOpen(false);
        }
      }}
    >
      <span id={`${listboxId}-value`}><strong>{selected.label}</strong><small>{countLabel(selected.count)}</small></span>
      <ChevronDown size={18} aria-hidden="true" />
    </button>

    {open && <div className="technology-menu">
      <div className="technology-menu-search">
        <Search size={16} aria-hidden="true" />
        <input
          ref={searchRef}
          type="text"
          value={query}
          onChange={event => { setQuery(event.target.value); setHighlighted(0); }}
          onKeyDown={handleNavigation}
          placeholder={searchPlaceholder}
          aria-label={searchPlaceholder}
          aria-controls={listboxId}
          aria-activedescendant={visibleOptions[highlighted] ? `${listboxId}-option-${visibleOptions[highlighted].value || "all"}` : undefined}
        />
        {query && <button type="button" onClick={() => { setQuery(""); setHighlighted(0); }} aria-label={`Clear ${label.toLowerCase()} search`}><X size={15} /></button>}
      </div>
      <div className="technology-options" id={listboxId} role="listbox" aria-labelledby={`${listboxId}-label`}>
        {visibleOptions.map((option, index) => <button
          id={`${listboxId}-option-${option.value || "all"}`}
          type="button"
          role="option"
          aria-selected={option.value === value}
          className={`${option.value === value ? "selected" : ""} ${index === highlighted ? "highlighted" : ""}`}
          key={option.value || "all"}
          onMouseEnter={() => setHighlighted(index)}
          onClick={() => choose(option.value)}
        >
          <span>{option.label}<small>{countLabel(option.count)}</small></span>
          {option.value === value && <Check size={16} aria-hidden="true" />}
        </button>)}
        {!visibleOptions.length && <p className="technology-no-results">No {label.toLowerCase()} found.</p>}
      </div>
    </div>}
  </div>;
}
