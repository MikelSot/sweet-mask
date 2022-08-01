import { SVGProps } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>) => {
  return (
    <a href={props.href || '#!'}>
      <svg width={30} height={30} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          fill={props.fill || 'currentColor'}
          d="M0 7.162C0 3.206 3.288 0 7.344 0h85.312C96.712 0 100 3.206 100 7.162v85.676c0 3.956-3.287 7.162-7.344 7.162H7.344C3.287 100 0 96.794 0 92.838V7.163Zm30.894 76.55V38.557H15.888v45.157h15.006Zm-7.5-51.325c5.231 0 8.487-3.462 8.487-7.8-.093-4.43-3.25-7.8-8.387-7.8-5.138 0-8.494 3.376-8.494 7.8 0 4.338 3.256 7.8 8.294 7.8h.1Zm30.675 51.326v-25.22c0-1.35.1-2.7.5-3.662 1.081-2.694 3.55-5.487 7.7-5.487 5.431 0 7.6 4.137 7.6 10.212v24.157h15.006v-25.9c0-13.876-7.4-20.326-17.275-20.326-7.962 0-11.531 4.375-13.531 7.457v.156h-.1l.1-.156v-6.388h-15c.187 4.238 0 45.157 0 45.157h15Z"
        />
      </svg>
    </a>
  )
}

export default SvgComponent

/*

  <a href="#!" class="mr-6 text-gray-600">
    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f"
      class="w-2.5" role="img" xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512">
      <path fill="currentColor"
        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
      </path>
    </svg>
  </a>

*/
