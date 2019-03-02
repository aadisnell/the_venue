import React , {Component} from 'react';
import MyButton from '../utils/myButton';

import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {
  state = {
    prices: [100, 150, 250],
    positions: ["Balcony", "Medium", "Star"],
    desc: [
      "loremkdk kdkdiekisekdkf",
      "whenint itime kdoitlkad",
      "penoopole tjilkakdfon mldklfd"
    ],

    linkto: ["https//sales.balcony", "https://www.f.com", "https://www.f.com"],
    delay: [500,0,500]
  };
  showBoxes = () =>(
    this.state.prices.map((box, i) => (
      <Zoom key={i} delay={this.state.delay}>
            <div className="pricing_item">
                <div className="pricing_inner_wrapper">
                    <div className="pricing_title">
                        <span>${this.state.prices[i]}</span>
                        <span>{this.state.positions[i]}</span>
                    </div>

                    <div className="pricing_description">

                        {this.state.desc}

                    </div>
                    <div className="pricing_button">
                        <MyButton text="Purchase"
                            bck="#ffa800"
                            color="#ffffff"
                            link={this.state.linkto[i]}

                        />
                    </div>
                </div>
            </div>
      </Zoom>
    ))
  )
  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}


export default Pricing;
