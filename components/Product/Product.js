import Image from "next/image";

export function Product({image, label, price, description}) {
  return (
  <div className="">

    <div className="group flex flex-col overflow-hidden transition-all duration-300">
      <div className="relative overflow-hidden h-[240px]">
        <Image
          alt=""
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={image} 
          width={100}
          height={100}
          />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-3 gap-2">
          <h5 className="font-heading">
            {label}
          </h5>
          <span className="text-base shrink-0">{price}</span>
        </div>
        <p className="text-sm leading-relaxed">{description}</p>
      </div>
    </div>

  </div>
  )
}