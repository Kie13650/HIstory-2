import React from 'react'
import {Button,Modal,} from 'react-bootstrap'
//  import {Label} from 'react-bootstrap'
import './index.css'

function TestGrid() {
    <div class="container-fluid">
    <div class="row my-row">
      <div class="col-md-2  my-col2-2">
        <div className="B-back">
          <div className="iconBack">
            <ion-icon
              style={{ width: 20, height: 20 }}
              name="arrow-back-circle-outline"
            ></ion-icon>
          </div>
          <div className="back">ย้อนกลับ</div>
        </div>
      </div>

      <div class="col-md-8  col-md-8   my-col3 ">
        <div className="head-barH2">

          <div className="B-back2">
            <div className="iconBack">
              <ion-icon
                style={{ width: 20, height: 20 }}
                name="arrow-back-circle-outline"
              ></ion-icon>
            </div>
            <div className="back">ย้อนกลับ</div>
          </div>

          <div className="B-back-H">
            <div className="iconBack">
              <ion-icon
                style={{ width: 35, height: 35 }}
                name="arrow-back-circle-outline"
              ></ion-icon>
            </div>
            <div className="back">ย้อนกลับ</div>
          </div>

          <div className="head-barH0">
            <div className="head-barH">
              <div className="barH"> </div>
              <div className="fontH1">ประวัติการกรอกข้อมูลของคุณ</div>
            </div>
            <div className="head-barH1">
              <div className="Eyear">ปีการศึกษา</div>
              <div className="year">2555</div>
            </div>
          </div>

          <div className="B-back-H3">
            <div className="iconBack">
              <ion-icon
                style={{ width: 0, height: 0 }}
                name="arrow-back-circle-outline"
              ></ion-icon>
            </div>
          </div>

        </div>
      </div>

      <div class="col-2  my-col2-1"></div>
    </div>
    </div>
   
  }
  
  export default Edit;