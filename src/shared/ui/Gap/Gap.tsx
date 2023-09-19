type GapProps = {
  size: number
}

export function Gap(props: GapProps) {
  return (
    <div style={{padding: `${props.size / 2}rem`}}>
      
    </div>
  )
}
