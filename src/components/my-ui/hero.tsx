import React from 'react'
import { Button } from '@/components/ui/button'
import Badge from '@/components/my-ui/badge'
const Hero = () => {
  return (
    <main
    className=" w-full mt-32 flex flex-col gap-3 justify-center items-center relative"
  >
    <Badge />

    <h1
      className=" font-semibold text-4xl md:text-6xl text-slate-800  mt-4 text-center w-[95%] md:w-[50%]"
    >
      Web app to desktop app in minutes
    </h1>
    <p
      className=" text-lg md:text-2xl mt-4 text-slate-600 text-center w-[95%] md:w-[50%]"
    >
      nexsus is a web app that converts your web app to a desktop app in minutes.
    </p>
    <div className="flex mt-6 gap-4 justify-center items-center">
      <Button
        size={'lg'}
        variant={'gradient'}
        className=" flex gap-1 justify-center items-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} fill={"none"}>
          <path d="M12 3C9.05058 3 6.59627 5.11144 6.07743 7.8996C5.9907 8.36569 5.94733 8.59873 6.1089 8.90532C6.27048 9.2119 6.49914 9.31381 6.95646 9.51763C8.33509 10.1321 10.0897 10.5 12 10.5C13.9103 10.5 15.6649 10.1321 17.0435 9.51763C17.5009 9.31381 17.7295 9.2119 17.8911 8.90532C18.0527 8.59873 18.0093 8.36569 17.9226 7.8996C17.4037 5.11144 14.9494 3 12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M17 5.5C19.989 6.28752 22 7.75946 22 9.44533C22 11.9608 17.5228 14 12 14C6.47715 14 2 11.9608 2 9.44533C2 7.75946 4.01099 6.28752 7 5.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 18V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M17 17L18 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 17L6 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Get Started
      </Button>
      <Button
        size={'lg'}
        variant={'outline'}
        className=" flex gap-1 justify-center items-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} fill={"none"}>
          <path d="M7.5 4.94531H16C16.8284 4.94531 17.5 5.61688 17.5 6.44531V7.94531" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 12.9453H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 16.9453H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18.497 2L6.30767 2.00002C5.81071 2.00002 5.30241 2.07294 4.9007 2.36782C3.62698 3.30279 2.64539 5.38801 4.62764 7.2706C5.18421 7.7992 5.96217 7.99082 6.72692 7.99082H18.2835C19.077 7.99082 20.5 8.10439 20.5 10.5273V17.9812C20.5 20.2007 18.7103 22 16.5026 22H7.47246C5.26886 22 3.66619 20.4426 3.53959 18.0713L3.5061 5.16638" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        Read Docs
      </Button>
    </div>
  </main>
  )
}

export default Hero