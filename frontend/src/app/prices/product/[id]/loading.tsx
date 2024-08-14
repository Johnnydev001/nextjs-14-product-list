export default function LoadingPrices(): JSX.Element  {
    return (
        <div aria-live={'assertive'} role={'alert'} className={'text-center flex justify-center  fixed top-0 right-0  left-0 z-30 bg-zinc-100 text-black px-4 py-2 rounded-md text-md'}>Loading product prices...</div>
    )
}