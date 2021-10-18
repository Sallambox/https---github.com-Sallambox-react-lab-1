import React from 'react'

export class AboutUs  extends React.Component{
    render() {
        return (
            <div className="container ">
                <div class="row d-flex justify-content-start">
                    <div class="col-4 d-flex justify-content-start">
                        <h1>About Us</h1>
                    </div>
                    <div class="col-8 d-flex justify-content-start">
                        <p>Exercitation ullamco ad adipisicing incididunt eu.Tempor sint et dolor exercitation nulla amet pariatur duis consectetur duis nostrud.Sit adipisicing tempor eiusmod aliquip occaecat aute officia.
                        </p>
                    </div>
                </div>
                <div className=" justify-lef">
                    <button className="btn btn-primary">contact us</button>
                </div>
            </div>
        )
    }
}