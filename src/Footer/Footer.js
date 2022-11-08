import React from 'react'
import Wave from 'react-wavify'

export default function Footer() {
  return (
    <div>
      <Wave fill="url(#gradient)">
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="20%" stopColor="#00FFFF" />
            <stop offset="80%" stopColor="#1c2842" />
          </linearGradient>
        </defs>
      </Wave>
    </div>
  )
}