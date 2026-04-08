type SectionLabelProps = {
  index: string
  label: string
}

function SectionLabel({ index, label }: SectionLabelProps) {
  return (
    <p className="inline-flex items-center gap-3 font-mono text-[0.7rem] tracking-[0.2em] text-teal">
      <span>{index}</span>
      <span aria-hidden="true" className="text-teal-light/70">
        &mdash;
      </span>
      <span>{label}</span>
    </p>
  )
}

export default SectionLabel
