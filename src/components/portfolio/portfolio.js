import React from 'react'
import { DarkCard } from './darkCard'
import { DarkerCard } from './darkerCard'

export class Portfolio  extends React.Component{
    render() {
        return (
            <div className="container p-2">
                <h3 className="m-2">portfolio</h3>
                <div className="row justify-content-between">
                    <DarkCard darkOrSecondary="dark"/>
                    <DarkCard darkOrSecondary="secondary"/>
                    <DarkCard darkOrSecondary="dark"/>
                </div>
                <div className="row justify-content-between">
                    <DarkerCard/>
                    <DarkCard darkOrSecondary="dark"/>
                    <DarkerCard/>
                </div>
            </div>

        )
    }
}