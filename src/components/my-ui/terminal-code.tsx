import React from 'react'

const TerminalCode = () => {
    return (
        <section
            className=' w-[90%] shadow-xl shadow-primary/30 md:w-full aspect-video max-h-[45rem] overflow-hidden mt-10  flex  gap-2 justify-start items-start max-w-[70rem] rounded-lg bg-slate-900 text-white'
        >
            <svg
            className=' -ml-3'
            width="330" height="253" viewBox="0 0 330 253" fill="none" >
                <path d="M11 25H73L91 39L73 52H11V25Z" fill="url(#paint0_linear_7_8)" />
                <path d="M27.3366 33.8182V44H25.9247L20.7493 36.5327H20.6548V44H19.1186V33.8182H20.5405L25.7209 41.2955H25.8153V33.8182H27.3366ZM32.6749 44.1541C31.959 44.1541 31.3342 43.9901 30.8006 43.6619C30.267 43.3338 29.8527 42.8748 29.5577 42.2848C29.2627 41.6948 29.1152 41.0054 29.1152 40.2166C29.1152 39.4245 29.2627 38.7318 29.5577 38.1385C29.8527 37.5452 30.267 37.0845 30.8006 36.7564C31.3342 36.4283 31.959 36.2642 32.6749 36.2642C33.3908 36.2642 34.0156 36.4283 34.5492 36.7564C35.0828 37.0845 35.4971 37.5452 35.7921 38.1385C36.0871 38.7318 36.2346 39.4245 36.2346 40.2166C36.2346 41.0054 36.0871 41.6948 35.7921 42.2848C35.4971 42.8748 35.0828 43.3338 34.5492 43.6619C34.0156 43.9901 33.3908 44.1541 32.6749 44.1541ZM32.6799 42.9062C33.1439 42.9062 33.5284 42.7836 33.8333 42.5384C34.1382 42.2931 34.3636 41.9666 34.5094 41.5589C34.6586 41.1513 34.7331 40.7022 34.7331 40.2116C34.7331 39.7244 34.6586 39.277 34.5094 38.8693C34.3636 38.4583 34.1382 38.1286 33.8333 37.88C33.5284 37.6314 33.1439 37.5071 32.6799 37.5071C32.2125 37.5071 31.8248 37.6314 31.5165 37.88C31.2116 38.1286 30.9846 38.4583 30.8354 38.8693C30.6896 39.277 30.6167 39.7244 30.6167 40.2116C30.6167 40.7022 30.6896 41.1513 30.8354 41.5589C30.9846 41.9666 31.2116 42.2931 31.5165 42.5384C31.8248 42.7836 32.2125 42.9062 32.6799 42.9062ZM37.8938 44V36.3636H39.3306V37.5767H39.4102C39.5494 37.1657 39.7946 36.8426 40.146 36.6072C40.5006 36.3686 40.9016 36.2493 41.3491 36.2493C41.4419 36.2493 41.5513 36.2526 41.6772 36.2592C41.8065 36.2659 41.9076 36.2741 41.9805 36.2841V37.706C41.9208 37.6894 41.8147 37.6712 41.6623 37.6513C41.5098 37.6281 41.3574 37.6165 41.2049 37.6165C40.8536 37.6165 40.5404 37.6911 40.2653 37.8402C39.9935 37.986 39.7781 38.1899 39.619 38.4517C39.4599 38.7102 39.3803 39.0052 39.3803 39.3366V44H37.8938ZM43.2669 44V36.3636H44.6937V37.6065H44.7882C44.9473 37.1856 45.2074 36.8575 45.5687 36.6222C45.93 36.3835 46.3625 36.2642 46.8663 36.2642C47.3767 36.2642 47.8043 36.3835 48.149 36.6222C48.497 36.8608 48.7538 37.1889 48.9196 37.6065H48.9991C49.1814 37.1989 49.4714 36.8741 49.8691 36.6321C50.2669 36.3868 50.7408 36.2642 51.291 36.2642C51.9837 36.2642 52.5488 36.4813 52.9863 36.9155C53.4271 37.3497 53.6475 38.0043 53.6475 38.8793V44H52.161V39.0185C52.161 38.5014 52.0202 38.1269 51.7385 37.8949C51.4567 37.6629 51.1203 37.5469 50.7292 37.5469C50.2453 37.5469 49.8691 37.696 49.6007 37.9943C49.3322 38.2893 49.198 38.6688 49.198 39.1328V44H47.7164V38.924C47.7164 38.5097 47.5872 38.1766 47.3287 37.9247C47.0701 37.6728 46.7337 37.5469 46.3194 37.5469C46.0377 37.5469 45.7775 37.6214 45.5389 37.7706C45.3036 37.9164 45.113 38.1203 44.9672 38.3821C44.8246 38.6439 44.7534 38.9472 44.7534 39.2919V44H43.2669ZM57.8622 44.169C57.3783 44.169 56.9408 44.0795 56.5497 43.9006C56.1586 43.7183 55.8487 43.4548 55.62 43.1101C55.3946 42.7654 55.282 42.3428 55.282 41.8423C55.282 41.4115 55.3648 41.0568 55.5305 40.7784C55.6963 40.5 55.92 40.2796 56.2017 40.1172C56.4834 39.9548 56.7983 39.8321 57.1463 39.7493C57.4943 39.6664 57.849 39.6035 58.2102 39.5604C58.6676 39.5073 59.0388 39.4643 59.3239 39.4311C59.6089 39.3946 59.8161 39.3366 59.9453 39.2571C60.0746 39.1776 60.1392 39.0483 60.1392 38.8693V38.8345C60.1392 38.4003 60.0166 38.0639 59.7713 37.8253C59.5294 37.5866 59.1681 37.4673 58.6875 37.4673C58.187 37.4673 57.7926 37.5784 57.5043 37.8004C57.2192 38.0192 57.022 38.2628 56.9126 38.5312L55.5156 38.2131C55.6813 37.7491 55.9233 37.3745 56.2415 37.0895C56.563 36.8011 56.9325 36.5923 57.3501 36.4631C57.7678 36.3305 58.2069 36.2642 58.6676 36.2642C58.9725 36.2642 59.2957 36.3007 59.6371 36.3736C59.9818 36.4432 60.3033 36.5724 60.6016 36.7614C60.9032 36.9503 61.1501 37.2204 61.3423 37.5717C61.5346 37.9197 61.6307 38.3722 61.6307 38.929V44H60.179V42.956H60.1193C60.0232 43.1482 59.879 43.3371 59.6868 43.5227C59.4946 43.7083 59.2476 43.8625 58.946 43.9851C58.6444 44.1077 58.2831 44.169 57.8622 44.169ZM58.1854 42.9759C58.5964 42.9759 58.9477 42.8946 59.2393 42.7322C59.5343 42.5698 59.758 42.3577 59.9105 42.0959C60.0663 41.8307 60.1442 41.5473 60.1442 41.2457V40.2614C60.0911 40.3144 59.9884 40.3641 59.8359 40.4105C59.6868 40.4536 59.5161 40.4917 59.3239 40.5249C59.1316 40.5547 58.9444 40.5829 58.7621 40.6094C58.5798 40.6326 58.4273 40.6525 58.3047 40.669C58.0163 40.7055 57.7528 40.7668 57.5142 40.853C57.2789 40.9392 57.09 41.0634 56.9474 41.2259C56.8082 41.3849 56.7386 41.5971 56.7386 41.8622C56.7386 42.2301 56.8745 42.5085 57.1463 42.6974C57.4181 42.883 57.7644 42.9759 58.1854 42.9759ZM65.0971 33.8182V44H63.6106V33.8182H65.0971Z" fill="#07090E" />
                <defs>
                    <linearGradient id="paint0_linear_7_8" x1="91" y1="38" x2="-5" y2="38" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#48C8FF" />
                        <stop offset="0.62963" stopColor="#1BA0F2" />
                    </linearGradient>
                </defs>
            </svg>
           
        </section>
    )
}

export default TerminalCode