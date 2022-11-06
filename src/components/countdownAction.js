import React, { useState, useEffect } from 'react'

function CountdownAction(props) {
    let currentCount = 5
    if (props.Seconds != null && props.Seconds != undefined) {
        currentCount = props.Seconds
    } 
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        if (typeof document !== `undefined`) {
            if (!isActive) {
                updateCountdown(currentCount)
                currentCount = currentCount - 1
                setIsActive(true)
                let x = setInterval(() => {
                    console.log(currentCount)
                    updateCountdown(currentCount)
                    currentCount = currentCount - 1
                    if (currentCount < 0) {
                        props.CallBack()
                        clearInterval(x)
                    }
                }, 1000)
            }
        }
    })


    return (
        <div>
            <h5 id="countdown-action-timer"></h5>
        </div>
    )
}

function updateCountdown(current) {
    document.getElementById("countdown-action-timer")
        .innerText = current
}

export default CountdownAction