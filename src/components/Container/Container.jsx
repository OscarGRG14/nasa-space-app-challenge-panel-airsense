import React from "react";

export default function Container({ children }) {
    return (
        <div className="mt-28 relative z-10 flex flex-col gap-4 items-center justify-center mb-10">
            {children}
        </div>
    );
}
