import React from "react"

import { colors } from "../../../models"
import Wrapper from "./Wrapper"

interface IconBehanceProps {
  path?: string
}

const IconBehance = ({
  path = "https://www.behance.net/Lu-di",
}: IconBehanceProps) => (
  <Wrapper path={path}>
    <svg
      height="85%"
      viewBox="0 0 42 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36.3562 13.5431H28.6365C29.3757 8.60057 36.0595 9.25557 36.3562 13.5431ZM38.9064 2.71057H26.117V0.210571H38.9064V2.71057ZM12.3939 0.245572C21.7302 0.380572 21.9093 9.32057 17.0314 11.7556C22.935 13.8556 23.1319 25.1906 11.5651 25.1906H0.538086V0.245572H12.3939ZM32.1331 5.88557C37.387 5.88557 40.5972 8.85307 41.2981 13.2606C41.4285 14.1056 41.4822 15.2431 41.4566 16.8281H28.5163C28.194 21.5131 33.7088 22.3481 35.594 20.2106H40.9962C40.2442 22.3731 37.538 25.2106 32.2994 25.2106C27.0583 25.2106 23.5591 22.3306 23.5591 15.7531C23.5591 9.23557 26.7744 5.88557 32.1331 5.88557ZM5.6543 15.2034H11.4377C16.2414 15.2034 16.5611 20.2284 11.3533 20.2284H5.6543V15.2034ZM5.6543 5.20336H11.2331C16.7223 5.20336 16.0444 10.2034 11.7651 10.2034H5.6543V5.20336Z"
        fill={colors.white}
      />
    </svg>
  </Wrapper>
)

export default IconBehance
