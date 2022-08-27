import React from 'react'
import styles from "../Footer/Footer.module.css"
const Footer = () => {
    return (
        <div>
            <div className={`${styles.shopify}`}>
                <div className={`${styles.footer}`}>
                    <div className={`${styles.wide} container`}>
                        <div className={`row`}>
                            <div className={`col-lg-2 ${styles.widget} col-md-4 col-sm-12`}>
                                <div className={`${styles.logo}`}>
                                    <a className={`${styles.theme}`}>
                                        <img src='https://cdn.shopify.com/s/files/1/0023/4104/4283/files/logo_ffda4e02-6b78-4a48-b3a6-0777ab5288ad_300x300.png?v=1641275663' alt="astor" />
                                    </a>
                                </div>
                                <div className={`${styles.copyright}`}>
                                    <p>Copyright © Aplee Shopify&nbsp;</p>
                                    <p>All Right Reserved.</p>
                                </div>
                            </div>
                            <div className={`col-lg-2 ${styles.widget} col-md-4 col-sm-12`}>
                                <h5 className={`${styles.title}`}>
                                    INFORMATION
                                </h5>
                                <div className=''>
                                    <nav>
                                        <ul>
                                            <li><a > Blog</a></li>
                                            <li><a > Jobs</a></li>
                                            <li><a > FAQ</a></li>
                                            <li><a > Privacy Policy</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className={`col-lg-2 ${styles.widget} col-md-4 col-sm-12`}>
                                <h5 className={`${styles.title}`}>
                                    USEFUL LINKS
                                </h5>
                                <div className=''>
                                    <nav >
                                        <ul>
                                            <li><a> Refund policy</a></li>
                                            <li><a > Login</a></li>
                                            <li><a > Order status</a></li>
                                            <li><a > Site Map</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className={`col-lg-2 ${styles.widget} col-md-4 col-sm-12`}>
                                <h5 className={`${styles.title}`}>
                                    HELP CENTER
                                </h5>
                                <div className=''>
                                    <nav >
                                        <ul>
                                            <li><a> Blog</a></li>
                                            <li><a >Jobs</a></li>
                                            <li><a > FAQ</a></li>
                                            <li><a > Privacy Policy</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className={`col-lg-2 ${styles.widget} col-md-4 col-sm-12`}>
                                <h5 className={`${styles.title}`}>
                                    FOLLOW US ON

                                </h5>
                                <div className={`${styles.links} `}>
                                    <nav >
                                        <ul>
                                            <li><a><i className="fa-brands fa-twitter"></i>  Twitter</a></li>
                                            <li><a ><i className="fa-brands fa-square-instagram"></i> instagram</a></li>
                                            <li><a ><i className="fa-brands fa-linkedin"></i> Linkedin</a></li>
                                            <li><a > <i className="fa-brands fa-pinterest"></i>Pinterest</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer