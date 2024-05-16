type SectionHeadingProps = {
  children: React.ReactNode
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="mb-8 text-center text-3xl font-medium capitalize font-bebas tracking-widest">
      {children}
    </h2>
  )
}
