import { Suspense } from "react";

// Simple async component to test PPR
async function SlowComponent() {
    // Simulate slow data fetching
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return (
        <div className="bg-green-100 p-4 rounded-lg">
            <h3 className="text-green-800 font-semibold">PPR Test Component</h3>
            <p className="text-green-600">This loaded after 2 seconds</p>
        </div>
    );
}

function LoadingSkeleton() {
    return (
        <div className="bg-gray-100 p-4 rounded-lg animate-pulse">
            <div className="h-6 bg-gray-300 rounded mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-2/3"></div>
        </div>
    );
}

export default function PPRTestComponent() {
    return (
        <div className="mt-6">
            <h2 className="text-xl font-bold mb-4">PPR Test</h2>
            <Suspense fallback={<LoadingSkeleton />}>
                <SlowComponent />
            </Suspense>
        </div>
    );
}
