import React , { useEffect, useState } from 'react'
import css from "../Detail/Detail.module.css"
import { Image } from 'antd';
import { Rate } from 'antd';
import { useParams } from 'react-router-dom';
const Detail = (props) => {
    const [show,setShow] = useState(0)
    const {id} = useParams()
    const [product,setProduct] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3000/product/${id}`)
          .then((response) => response.json())
          .then((data) => {
            setProduct(data);
          });
      }, []);
    const HandleAddCart = (obj) => {
        props.setCountAdd((preState) => {
          return preState + 1;
        });
        props.setListAdd((preState) => {
          return [...preState, obj];
        });
      };
    return (
        <div>
            <div className={`${css.breadcrumb}`}>
                <div className='container'>
                    <div className='row'>
                        <div className={`${css.text} col-lg-12 `}>
                            <nav >
                                <ul className={`${css.list}`}>
                                    <li className={`${css.li}`}><a href='/'>Home</a></li>
                                    <li><span>Shop</span> </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <section className={css.inner}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className={css.gallery}>
                                <div className={css.preview}>
                                    
                                        <Image src={product.img} />
                                    
                                </div>

                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className={css.content}>
                                <h2 className={css.name}>
                                    {product.name}
                                </h2>

                                <div className={css.rating}>
                                    <Rate disabled defaultValue={5} />
                                </div>
                                <div className={css.inventory}>
                                    <span className={css.inventorytitle}>Availability: </span>
                                    <span className={css.variantinventory}>Out of stock</span>
                                </div>
                                <h3 className={css.price}>
                                    <span >
                                        ${product.price}
                                    </span>
                                </h3>
                                <div className={css.information}>
                                    <button >
                                        <i className="fa-solid fa-truck"></i>
                                        Shipping
                                    </button>
                                    <button >
                                        <i className="fa-solid fa-envelope"></i>
                                        Ask About This product
                                    </button>
                                </div>
                                <div className={css.quantity}>
                                    <div className={css.shopquantity}>Quantity: </div>
                                    <div className={css.value}>
                                        <div className={css.quantityvalue}>
                                        </div>
                                    </div>
                                </div>
                                <div className={css.cart}>
                                    <div className={css.productcart}>
                                        <button onClick={(e) => {
                        e.preventDefault();
                        HandleAddCart({
                          name: product.name,
                          price: product.price,
                          img: product.image,
                          id: product.id,
                        });
                      }}>Add to cart</button>
                                    </div>
                                    <div className={css.wishlist}>
                                        <a href='/Wishlist' className={css.action}>
                                            <i className="fa-solid fa-heart"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className={css.custom}>
                                    <div><p>Guaranteed safe checkout</p> </div>
                                </div>
                                <div className={css.info}>
                                    <table>
                                        <tbody>
                                            <tr className={css.single}>
                                                <td className={css.quickview}>Vendor: </td>
                                                <td className={css.quickviewvalue}> nike </td>
                                            </tr>
                                            <tr className={css.single}>
                                                <td className={css.quickview}>Type: </td>
                                                <td className={css.quickviewvalue}>  pant  </td>
                                            </tr>
                                            <tr className={css.single}>
                                                <td className={css.quickview}>Share:  </td>
                                                <td className={css.quickviewvalue}>
                                                    <div className={css.icons}>
                                                        <div className={css.social}>
                                                            <a href='' className={css.face}><i className="fa-brands fa-facebook-f"></i></a>
                                                            <a href='' className={css.twin}><i className="fa-brands fa-twitter"></i></a>
                                                            <a href='' className={css.pin}><i className="fa-brands fa-pinterest"></i></a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className={css.wrapper}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className={css.shopproduct}>
                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <div className={css.tab}>
                                            <div className={css.tableft}>
                                                <div className={`nav  justify-content-center ${css.tabnav}`}>
                                                    <a href='' className={ show === 0 ? `${css.active}  ${css.actives}` : `${css.active} `} onClick={(e)=>{e.preventDefault() ;setShow(0)}}> Description</a>
                                                    <a href='' className={show === 1 ? `${css.active} ${css.actives} ` : `${css.active}`} onClick={(e)=>{e.preventDefault() ;setShow(1)}}>  Review</a>
                                                    <a href='' className={show === 2 ? `${css.active} ${css.actives} ` : `${css.active}`} onClick={(e)=>{e.preventDefault() ;setShow(2)}}>  Custom Tab</a>
                                                </div>
                                            </div>
                                            <div className={`${css.tabcontent}`}>
                                                <div className={ show === 0 ? `${css.pane} ` : `${css.show}`}>
                                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised
                                                        words which don't look even slightly believable.
                                                    </p>
                                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                                                    <p>To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?</p>
                                                </div>
                                                <div className={ show === 1 ? `${css.pane} ` : `${css.show}`}>
                                                    <div className={css.spr}>
                                                        <div className={css.header}>
                                                            <h2 className={css.sprheader}>Customer Reviews</h2>
                                                            <div className={css.sprsummary}>
                                                                <span className={css.caption}>No reviews yet</span>
                                                                <span className={css.caption}>
                                                                    <a href='' className={css.newreview}>Write a review</a>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={show === 2 ? `${css.pane} ` : `${css.show}`}>
                                                    Custom Tab Content test
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Detail