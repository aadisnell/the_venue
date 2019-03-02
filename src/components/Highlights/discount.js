import React,{Component} from 'react';
import Fade from 'react-reveal/Fade';
import Slide from "react-reveal/Slide";
import MyButton from '../utils/myButton';

class Discount extends Component {
    
    state = {
        discountStart: 0,
        discountEnd: 30
    }

    porcentage = () => {
        if(this.state.discountStart < this.state.discountEnd ){
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }
    }

    componentDidUpdate() {
        setTimeout(() => {
            this.porcentage()
        },30)
    }

    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade onReveal={() => this.porcentage()}>
                        <div className="discount_porcentage">
                            <span>{this.state.discountStart}%</span>
                            <span>OFF </span>
                        </div>
                    </Fade>
                    <Slide right>
                        <div className="discount_description">
                            <h3>Purchase ticket before the date </h3>
                            <p>
                                Banking institutions can experiment with bankruptcy as an
                                option for market exit, although mergers and acquisitions will
                                remain as the main option, said Xiao Yuanqi.
                    </p>
                            <div>
                                <MyButton text="Purchase tickets"
                                
                                bck="#ffa800"
                                color="#fffffff"
                                link="https://google.com"/>
                            </div>
                        </div>
                    </Slide>

                </div>
            </div>
        );
    }
}


export default Discount;