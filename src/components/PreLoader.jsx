import React from 'react'

export default function PreLoader() {
    return (
        <div id="js-preloader" className="js-preloader">
            {/* ***** Preloader Start ***** */}
            <div className="preloader-inner">
                <span className="dot" />
                <div className="dots">
                    <span />
                    <span />
                    <span />
                </div>
            </div>
            {/* ***** Preloader End ***** */}
        </div>
    )
}
