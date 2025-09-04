

type LoaderProps = {
    className?: string
};

export default function LoadingIcon({ className }: LoaderProps) {
    return (
        <div className={`animate-spin rounded-full h-5 w-5 md:h-7 md:w-7 border-b-2 border-primary mx-auto mb-4 ${className && className}`} />
    )
}