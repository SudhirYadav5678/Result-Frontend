import React from 'react'

function Home() {
    return (
        <>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Result <span className='text-success'>Management</span></h1>
                        <p className="py-6 hover:text-success">
                            To manage your result eaily and efficiently with us.
                        </p>
                        <button className="btn btn-success">Get Started</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home