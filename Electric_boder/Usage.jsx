// 1. Default Electric Border
<ElectroBorder>
  <div className="p-8 text-white">Electric Energy!</div>
</ElectroBorder>

// 2. Only Electric Border (no glow or aura)
<ElectroBorder effects={false}>
  <div className="p-8 text-white">Pure Electric Border</div>
</ElectroBorder>

// 3. Electric Border with Glow Only
<ElectroBorder aura={false}>
  <div className="p-8 text-white">Glow Only</div>
</ElectroBorder>

// 4. Electric Border with Aura Only
<ElectroBorder glow={false}>
  <div className="p-8 text-white">Aura Only</div>
</ElectroBorder>

// 5. Custom speed, distortion, and color
<ElectroBorder
  borderColor="#00ffff"
  borderWidth={3}
  distortion={1.8}
  animationSpeed={1.5}
  glowBlur={40}
  glow
  aura
>
  <div className="p-10 text-white">Custom Lightning Frame</div>
</ElectroBorder>