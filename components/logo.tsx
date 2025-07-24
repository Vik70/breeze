import Image from "next/image"

export function Logo({ className = "h-16" }: { className?: string }) {
  return (
    <div className="flex items-center space-x-3">
      <Image
        src="/images/breeze-logo.png"
        alt="Breeze Freight Services"
        width={100}
        height={600}
        className={className}
      />
    </div>
  )
}
