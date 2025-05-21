const IconLogoAvalon = ({width, height, color, className}: {width?: string, height?: string, fill?: string, color?: string, className?: string}) => {
  return (
    <svg
      width={width || "16px"}
      height={height || "auto"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color={color || "#000"}
      className={className || ""}
    >
        <path d="m4.2506 12.074c2.301 0.47967 4.4188 1.4046 6.0594 3.2106 0.92954-1.5081 3.3066-2.4846 5.5167-3.5271m-9.5801 6.8057c-0.51381-0.86496-2.7282-0.82032-4.9353-0.11326 5.1636-5.2713 6.7941-11.123 9.0891-17.048 1.8107 5.9657 3.4942 12.604 8.2299 17.002-1.6735-0.21459-3.9502-1.6592-4.8837 0.04522"
            fill-opacity="0" 
            stroke={color || "#000"}
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="1.6" 
            // style="paint-order:stroke fill markers"
        />
    </svg>
  )
}

export default IconLogoAvalon;
