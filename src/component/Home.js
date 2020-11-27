
import React, { Component } from 'react';
import AppleIcon from '@material-ui/icons/Apple';
import SearchIcon from '@material-ui/icons/Search';
import LocalMallIcon from '@material-ui/icons/LocalMall';

class Home extends Component{
  render(){
      return(
        <div>
            <div class="navbar-fixed">
                <nav class="black">
                   
                        <div class="nav-wrapper black">
                            <ul id="nav-mobile" class="center hide-on-med-and-down">
                                <li><a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<AppleIcon/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></li>
                                <li><a href="#">Mac&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></li>
                                <li><a href="#">iPad&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></li>
                                <li><a href="#">iPhone&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></li>
                                <li><a href="#">Watch&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></li>
                                <li><a href="#">TV&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></li>
                                <li><a href="#">Music&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></li>
                                <li><a href="#">Support&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></li>
                                <li><a><SearchIcon/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></li>
                                <li><a><LocalMallIcon/></a></li>
                            </ul>
                        </div>
                    </nav><br/><br/>
                    <img class="materialboxed" data-caption="A picture of a way with a group of trees in a park" width="1300" height="550" src="/000.png"/>
                    <div class="container">
                        <center>
                        <br/><br/>
                        <p><font size="7"><b>iPhone 12</b></font><br/><font size="5">blast past fast.</font></p>
                        <div class="pricing-info">
                            <p class="price price-with-carrier">
                                <span aria-label="From forty one dollars and sixty two cents per month or nine hundred ninety nine dollars before trade in." role="text">
                                    From $41.62/mo. or $999 before trade-in. </span><sup><a href="#" class="footnote">2</a></sup></p>
                                    <p>Buy directly from Apple with special carrier offers.</p>
                                </div>
                                <div class="cta-links">
                                    <a class="icon icon-after icon-chevronright" href="/" target="_self" rel="follow" data-analytics-region="learn more" data-analytics-title="Learn more about iPhone 12 Pro" aria-label="Learn more about iPhone 12 Pro">Learn more</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <a class="icon icon-after icon-chevronright" href="/" target="_self" rel="follow" data-analytics-region="buy" data-analytics-title="Buy iPhone 12 Pro" aria-label="Buy iPhone 12 Pro">Buy</a>
                            </div>
                                <img src="/12.png" width="700" height="400" /><br/>
                                <img width="200" height="150" src="/66.jpg  " />
                                    <h3><b>Give something wonderful</b></h3>
                                    <font size="5">
                                        <p><a href="/">Shop give </a></p>
                                    </font>
</center>
<Mui.Grid container spacing={1}>
                                        <Mui.Grid item xs={6} sm={4}>
                                            <img src="/1.jpg" width="300" height="200"></img>
                                        </Mui.Grid>
                                        <Mui.Grid item xs={6} sm={4}>
                                            <img src="/2.jpg" width="300" height="200"></img>
                                        </Mui.Grid>
                                        <Mui.Grid item xs={6} sm={4}>
                                            <img src="/3.jpg" width="300" height="200"></img>
                                        </Mui.Grid>
                                    </Mui.Grid>
                                 
                                    </div>
                                    <Mui.Grid container spacing={1}>
                                        <Mui.Grid item xs={12} sm={6}>
                                            <img src="/1.jpg" width="650" height="500"></img>
                                        </Mui.Grid>
                                        <Mui.Grid item xs={12} sm={6}>
                                            <img src="/hd.jpeg" width="650" height="500"></img>
                                        </Mui.Grid>
                                    </Mui.Grid>
                                    <Mui.Grid container spacing={1}>
                                        <Mui.Grid item xs={12} sm={6}>
                                            <img src="/1.jpg" width="650" height="500"></img>
                                        </Mui.Grid>
                                        <Mui.Grid item xs={12} sm={6}>
                                            <img src="/ww.jpg" width="650" height="500"></img>
                                        </Mui.Grid>
                                    </Mui.Grid>
                                    <Mui.Grid container spacing={1}>
                                        <Mui.Grid item xs={12} sm={6}>
                                            <img src="/1.jpg" width="650" height="500"></img>
                                        </Mui.Grid>
                                        <Mui.Grid item xs={12} sm={6}>
                                            <img src="/pp.jpeg" width="650" height="500"></img>
                                        </Mui.Grid>
                                    </Mui.Grid>
                    </div>
                </div>
      
      )
    }
  }

export default Home;