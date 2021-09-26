import React from 'react';
import Container from "reactstrap/es/Container";
import {Button, Card, CardText, CardTitle, Col, Row} from "reactstrap";
import {FcCloseUpMode} from 'react-icons/fc';
import "./Dashboard.css";
import { GrUserManager } from "react-icons/gr";

import { GrUserSettings } from "react-icons/gr";

class DashBoard extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
        <div>
           <Container className ="mt-3">
               <br/><br/>
           <div class="row course-items-area">
 <div class="mix col-lg-3 col-md-4 col-sm-6 web">
                <div class="course-item">
                  {/* <div class="course-thumb set-bg">
                    <img class="course-thumb set-bg"  />
                  </div> */}
                  <div class="course-info">
                    <div class="course-text">
                      <h5> <GrUserManager size ="1em" /> &nbsp;120 Students</h5>
                      {/* <p>Lorem ipsum dolor sit amet, consectetur</p> */}
                      {/* <div class="students">120 Students</div> */}
                    </div>
                    <div class="course-author">
                      <div
                        class="ca-pic set-bg"
                        data-setbg="img/authors/3.jpg"
                      ></div>
                      <div>
                        {/* William Parker, <span>Developer</span> */}
                        {/* s<br/><br/> */}
                        <Button>Manage Students</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mix col-lg-3 col-md-4 col-sm-6 web">
                <div class="course-item">
                  {/* <div class="course-thumb set-bg">
                    <img class="course-thumb set-bg"  />
                  </div> */}
                  <div class="course-info">
                    <div class="course-text">
                      <h5> <GrUserManager size ="1em" /> &nbsp;86 Teachers</h5>
                      {/* <p>Lorem ipsum dolor sit amet, consectetur</p> */}
                      {/* <div class="students">120 Students</div> */}
                    </div>
                    <div class="course-author">
                      <div
                        class="ca-pic set-bg"
                        data-setbg="img/authors/3.jpg"
                      ></div>
                      <div>
                        {/* William Parker, <span>Developer</span> */}
                        {/* s<br/><br/> */}
                        <Button>Manage Students</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="mix col-lg-3 col-md-4 col-sm-6 web">
                <div class="course-item">
                  {/* <div class="course-thumb set-bg">
                    <img class="course-thumb set-bg"  />
                  </div> */}
                  <div class="course-info">
                    <div class="course-text">
                      <h5> <GrUserSettings size ="1em" /> &nbsp;50 Employees</h5>
                      {/* <p>Lorem ipsum dolor sit amet, consectetur</p> */}
                      {/* <div class="students">120 Students</div> */}
                    </div>
                    <div class="course-author">
                      <div
                        class="ca-pic set-bg"
                        data-setbg="img/authors/3.jpg"
                      ></div>
                      <div>
                        {/* William Parker, <span>Developer</span> */}
                        {/* s<br/><br/> */}
                        <Button>Manage Students</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              
              <div class="mix col-lg-3 col-md-4 col-sm-6 web">
                <div class="course-item">
                  {/* <div class="course-thumb set-bg">
                    <img class="course-thumb set-bg"  />
                  </div> */}
                  <div class="course-info">
                    <div class="course-text">
                      <h5> <GrUserManager size ="1em" /> &nbsp;120 Students</h5>
                      {/* <p>Lorem ipsum dolor sit amet, consectetur</p> */}
                      {/* <div class="students">120 Students</div> */}
                    </div>
                    <div class="course-author">
                      <div
                        class="ca-pic set-bg"
                        data-setbg="img/authors/3.jpg"
                      ></div>
                      <div>
                        {/* William Parker, <span>Developer</span> */}
                        {/* s<br/><br/> */}
                        <Button>Manage Students</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>



           </div>

              
           </Container>
        </div>
        )
    }
}

export default DashBoard;