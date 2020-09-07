import React from 'react'

export default function Footer() {
    return (
        <footer className="page-footer font-small bg-white">
            <div className="container">
                <div className="row  text-white text-center">
                    <div className="col-md-12">
                        <div className="my-1 flex-center">
                            <a className="fb-ic" href="https://web.facebook.com/dfakorede29">
                                <i className="fab fa-facebook-f fa-lg white-text mr-4"> </i>
                            </a>
                            <a className="fb-ic" href="https://github.com/fakoredeDamilola">
                                <i className="fab fa-github fa-lg white-text mr-4"> </i>
                            </a>

                            <a className="tw-ic" href="https://www.twitter.com/@fakoredeDami">
                                <i className="fab fa-twitter fa-lg white-text mr-4"> </i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright text-center py-2">
                <a href="https://github.com/fakoredeDamilola"> Fakorede Damilola</a> and <a href="https://questions.aloc.ng/">Aloc api</a>
            </div>
        </footer>

    )
}
