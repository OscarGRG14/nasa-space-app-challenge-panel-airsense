import React from "react";

export default function Container({ children }) {
    return (
        <div className="mt-28 relative z-10 flex flex-col gap-4 items-center justify-center mb-10 w-full max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
            {children}
        </div>
    );
}
