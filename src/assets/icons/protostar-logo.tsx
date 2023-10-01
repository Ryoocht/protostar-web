import { SVGIcon } from '@/types/props/props.type'

export const ProtostarLogo = ({ fill, height, width }: SVGIcon) => {
  return (
    <svg
      width={width ?? '213'}
      height={height ?? '203'}
      viewBox='0 0 213 203'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g filter='url(#filter0_d_11_23)'>
        <path
          d='M5.47494 76.8322C6.47494 78.1603 52.9749 111.332 52.9749 111.332C53.8068 111.802 54.2326 111.596 54.9749 110.332L58.5951 100.5C58.5951 99.1678 58.5951 99 57.5951 98.5L42.0951 89C41.0951 88.5 41.5951 86.5 43.0951 86.5L61.0951 86.5C61.9412 86.5721 62.6823 84.7131 62.9749 83.8322L64.9749 76.8322C65.1806 75.9187 65.223 75.4036 63.4749 75.5041L7.47494 75.5041C4.47494 75.5041 4.47494 75.5041 5.47494 76.8322Z'
          fill={fill}
        />
        <path
          d='M166.975 191.332L146.975 127.332C146.471 126.626 146.561 126.364 143.975 127.832L135.475 133.832C134.716 134.365 134.527 134.685 134.975 135.332L138.595 153C139.356 155.52 137.494 156.842 135.475 155L110.595 135.332C109.873 134.966 108.517 135.998 108.095 136.332L100.696 142C98.6961 143.5 98.6342 143.973 99.5951 144.5L164.475 191.832C166.798 193.127 167.284 192.959 166.975 191.332Z'
          fill={fill}
        />
        <path
          d='M104.921 1.63684C104.921 1.63684 42.2469 190.6 41.5952 192.5C40.9436 194.4 42.6284 194.528 43.095 194C55.006 185.13 61.684 180.156 73.595 171.286C75.095 170.235 77.095 167 77.595 165.5L115.638 54.3321C116.062 52.6836 116.789 52.8002 118.475 53.8321L156.475 75.3321C159.099 76.7086 158.631 77.1331 157.475 77.8321L137.975 90.3322C136.975 91.3322 136.687 91.8189 137.677 93.8322L146.638 118.332C147.12 120.282 148.069 120.071 150.475 118.332L208.475 76.3321C209.129 75.4214 209.077 74.822 206.975 73.3321L107.475 1.63684C106.037 0.650826 105.4 0.485307 104.921 1.63684Z'
          fill={fill}
        />
      </g>
      <defs>
        <filter
          id='filter0_d_11_23'
          x='0.876953'
          y='0.834061'
          width='211.968'
          height='201.435'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='4' />
          <feGaussianBlur stdDeviation='2' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.0235294 0 0 0 0 0.713726 0 0 0 0 0.831373 0 0 0 0.35 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow_11_23'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_11_23'
            result='shape'
          />
        </filter>
      </defs>
    </svg>
  )
}
