import '../../tailwind.css'
import { ISvg, sizeMap } from '../interfaces/svg.interface';

export default function ShowPasswordIcon({  size = 'sm'
}: ISvg) {
  const svgSize = sizeMap[size]
  
  return (
    <svg
      width={svgSize}
      height={svgSize}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0044 15.1538C13.0206 15.1538 13.8828 14.7981 14.5912 14.0868C15.2995 13.3754 15.6537 12.5117 15.6537 11.4955C15.6537 10.4793 15.298 9.61708 14.5867 8.90875C13.8753 8.20042 13.0116 7.84625 11.9954 7.84625C10.9792 7.84625 10.117 8.20192 9.40865 8.91325C8.70032 9.62458 8.34615 10.4883 8.34615 11.5045C8.34615 12.5207 8.70182 13.3829 9.41315 14.0913C10.1245 14.7996 10.9882 15.1538 12.0044 15.1538ZM11.9999 14.2C11.2499 14.2 10.6124 13.9375 10.0874 13.4125C9.5624 12.8875 9.2999 12.25 9.2999 11.5C9.2999 10.75 9.5624 10.1125 10.0874 9.5875C10.6124 9.0625 11.2499 8.8 11.9999 8.8C12.7499 8.8 13.3874 9.0625 13.9124 9.5875C14.4374 10.1125 14.6999 10.75 14.6999 11.5C14.6999 12.25 14.4374 12.8875 13.9124 13.4125C13.3874 13.9375 12.7499 14.2 11.9999 14.2ZM12.0027 18C9.83665 18 7.86265 17.4106 6.08065 16.2317C4.29865 15.0529 2.96407 13.4757 2.0769 11.5C2.96407 9.52433 4.29774 7.94708 6.0779 6.76825C7.85807 5.58942 9.83115 5 11.9972 5C14.1632 5 16.1372 5.58942 17.9192 6.76825C19.7012 7.94708 21.0357 9.52433 21.9229 11.5C21.0357 13.4757 19.7021 15.0529 17.9219 16.2317C16.1417 17.4106 14.1687 18 12.0027 18ZM11.9999 17C13.8832 17 15.6124 16.5042 17.1874 15.5125C18.7624 14.5208 19.9666 13.1833 20.7999 11.5C19.9666 9.81667 18.7624 8.47917 17.1874 7.4875C15.6124 6.49583 13.8832 6 11.9999 6C10.1166 6 8.3874 6.49583 6.8124 7.4875C5.2374 8.47917 4.03324 9.81667 3.1999 11.5C4.03324 13.1833 5.2374 14.5208 6.8124 15.5125C8.3874 16.5042 10.1166 17 11.9999 17Z"
        fill='black'
      />
    </svg>
  );
}
