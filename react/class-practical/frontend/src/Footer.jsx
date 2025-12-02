import footerLogo from '../src/assets/logos.svg'

export const Footer = () => {
    return (
        <>


            <div className="footercontainer">

                <div className="rowfooter">
                    <div className="links-1">
                        <img src={footerLogo} alt="" />
                    </div>
                    <div className="links-2">
                        <h3>Quick Links</h3>
                        <a href="#">Careers</a>
                        <a href="#">Investor Relation</a>
                        <a href="#">Legal</a>
                        <a href="#">GitHub</a>
                        <a href="#">Trust Center</a>
                        <a href="#">Connect With Us</a>
                    </div>
                    <div className="links-3">
                        <h3>Support</h3>
                        <a href="#">Careers</a>
                        <a href="#">Investor Relation</a>
                        <a href="#">Legal</a>
                        <a href="#">GitHub</a>
                        <a href="#">Trust Center</a>
                        <a href="#">Connect With Us</a>
                    </div>
                    <div className="links-4">
                        <h3>Deployment</h3>
                        <a href="#">Careers</a>
                        <a href="#">Investor Relation</a>
                        <a href="#">Legal</a>
                        <a href="#">GitHub</a>
                        <a href="#">Trust Center</a>
                        <a href="#">Connect With Us</a>
                    </div>
                    <div className="links-5">
                        <h3>Data Basics</h3>
                        <a href="#">Careers</a>
                        <a href="#">Investor Relation</a>
                        <a href="#">Legal</a>
                        <a href="#">GitHub</a>
                        <a href="#">Trust Center</a>
                        <a href="#">Connect With Us</a>
                    </div>
                </div>

            </div>
            <div className="copyright">
                <p>© 2025 MongoDB, Inc.</p>
            </div>
        </>
    )
}
export default Footer