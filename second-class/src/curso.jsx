import React from 'react'


const Curso = () =>(
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src="https://edteam-media.s3.amazonaws.com/courses/medium/d438e9fa-77f0-4184-9d70-dd7778c309ec.png" alt="" />
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 className="t5 s-mb-2 s-center">
            Programación orientada a objetos con Go
        </h3>
        <div className="s-mb-2 s-main-center">
            <div className="card__teacher s-cross-center">
            <div className="card__avatar s-mr-1">
                <div className="circle img-container">
                <img src="https://edteam-media.s3.amazonaws.com/users/thumbnail/f242d8c4-f809-4e4c-baec-05abcaea3256.png" alt="test" />
                </div>
            </div>
            <span className="small">Alexys Lozada</span>
            </div>
        </div>
        <div className="s-main-center">
            <a className="button--ghost-alert button--tiny" href="https://www.google.com">$ 20USD</a>
        </div>
        </div>
    </article>
)

export default Curso