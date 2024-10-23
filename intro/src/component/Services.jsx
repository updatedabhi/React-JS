import React from 'react'

export default function Services() {
    var data = ["react", "Angular", "Flask"]
    return (
        <div>{
            data.map((item, index) =>
                <div key={index}>
                    <h1>{item}</h1>
                </div>
            )}
        </div>
    )
}
