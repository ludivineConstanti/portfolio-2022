import React from "react"

import { colors } from "../../../models"
import Wrapper from "./Wrapper"

interface IconGithubProps {
  path?: string
}

const IconGithub = ({
  path = "https://github.com/ludivineConstanti",
}: IconGithubProps) => (
  <Wrapper path={path}>
    <svg
      height="100%"
      viewBox="0 0 42 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.4319 40.9006C26.3912 41.1005 26.0631 40.4623 26.0631 39.9163V34.2897C26.0631 32.3749 25.3915 31.1291 24.6533 30.4934C29.2211 29.9859 34.0197 28.2505 34.0197 20.3759C34.0197 18.1356 33.2225 16.3053 31.9075 14.8724C32.1203 14.3546 32.8226 12.2681 31.705 9.44584C31.705 9.44584 29.985 8.89472 26.0708 11.5478C24.4328 11.0864 22.6795 10.8634 20.9364 10.8531C19.1933 10.8608 17.44 11.0864 15.802 11.5426C11.8853 8.88959 10.1627 9.44071 10.1627 9.44071C9.0502 12.2655 9.75256 14.3495 9.96531 14.8699C8.65288 16.3053 7.85312 18.133 7.85312 20.3734C7.85312 28.2274 12.6389 29.9884 17.1965 30.5088C16.6095 31.0215 16.0789 31.9238 15.8943 33.2516C14.7229 33.7745 11.7571 34.6794 9.92686 31.5444C9.92686 31.5444 8.84257 29.5757 6.78165 29.4296C6.78165 29.4296 4.78224 29.404 6.64066 30.678C6.64066 30.678 7.98641 31.3086 8.91947 33.6771C8.91947 33.6771 10.1063 37.3375 15.8097 36.0969V39.9137C15.8097 40.4546 15.4791 41.0903 14.4563 40.9006C6.30486 38.1911 0.429688 30.5037 0.429688 21.4448C0.429688 10.1174 9.61157 0.93811 20.9364 0.93811C32.2612 0.93811 41.4431 10.1174 41.4431 21.4448C41.4431 30.5011 35.5756 38.186 27.4319 40.9006Z"
        fill={colors.white}
      />
    </svg>
  </Wrapper>
)

export default IconGithub
