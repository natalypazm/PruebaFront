<template>
  <section id="dashboard">
    <h4 class="text-center mb-3">INDICADORES</h4>
    <mdb-card class="mb-4">
      <mdb-card-body>
      <div class="d-flex justify-content-center">
        <div class="custom-control custom-switch mr-3">
    <input type="checkbox" class="custom-control-input" id="customSwitches">
    <label class="custom-control-label" for="customSwitches">ocultar cuadro</label>
  </div>
          <div class="custom-control custom-switch">
    <input type="checkbox" class="custom-control-input" id="customSwitches">
    <label class="custom-control-label" for="customSwitches">ocultar lista</label>
  </div>
      </div>
          <mdb-card class="card-progress">
            <mdb-card-body>
            <div class="box-progress">
              <div class="first-text">
              <strong class="mr-3">Comprobantes</strong>
              <small>600</small>
              </div>
              <div class="progress progress-size">
                <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" class="progress-bar bg-info" role="progressbar"
                  style="width: 65%"></div>
              </div>
              <mdb-card-text class="progress-cantidad">S/ 2,301.00</mdb-card-text>
            </div>
            <div class="box-progress">
              <div class="first-text">
              <strong class="mr-3">Percepciones</strong>
              <small>24</small>
              </div>
              <div class="progress progress-size">
                <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" class="progress-bar bg-warning" role="progressbar"
                  style="width: 35%"></div>
              </div>
              <mdb-card-text class="progress-cantidad">S/ 570.00</mdb-card-text>
            </div>
              <div class="box-progress">
              <div class="first-text">
              <strong class="mr-3">Total</strong>
              <small>600</small>
              </div>
              <div class="progress progress-size">
                <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" class="progress-bar bg-success" role="progressbar"
                  style="width: 100%"></div>
              </div>
              <mdb-card-text class="progress-cantidad">S/ 2,301.00</mdb-card-text>
            </div>
            </mdb-card-body>
          </mdb-card>
          <!--<form id="demo-2">
            <input type="search" placeholder="Search">
          </form>!-->
            <mdb-form-inline class="md-form">
                <mdbIcon icon="search" />
                <mdb-input type="search" placeholder="Search" aria-label="Search"/>
            </mdb-form-inline>
            <mdb class="justify-content-center d-flex"><Proveedores></Proveedores></mdb>
      </mdb-card-body>
    </mdb-card>
  </section>
</template>
<script>
import {mdbCard, mdbCardBody, mdbCardText, mdbIcon, } from 'mdbvue';
import Proveedores from '@/components/Proveedores';

export default {
  name: 'Indicadores',
  components: {
    mdbCard,
    mdbCardBody,
    mdbCardText,
    mdbIcon,
    Proveedores,
  },
  data () {
    return {
      showFrameModalTop: false,
      showFrameModalBottom: false,
      showSideModalTopRight: false,
      showSideModalTopLeft: false,
      showSideModalBottomRight: false,
      showSideModalBottomLeft: false,
      showCentralModalSmall: false,
      showCentralModalMedium: false,
      showCentralModalLarge: false,
      showCentralModalFluid: false,
      showFluidModalRight: false,
      showFluidModalLeft: false,
      showFluidModalTop: false,
      showFluidModalBottom: false,
      switchValue: false,
      barChartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
          {
            label: '#1',
            data: [12, 39, 3, 50, 2, 32, 84],
            backgroundColor: 'rgba(245, 74, 85, 0.5)',
            borderWidth: 1
          }, {
            label: '#2',
            data: [56, 24, 5, 16, 45, 24, 8],
            backgroundColor: 'rgba(90, 173, 246, 0.5)',
            borderWidth: 1
          }, {
            label: '#3',
            data: [12, 25, 54, 3, 15, 44, 3],
            backgroundColor: 'rgba(245, 192, 50, 0.5)',
            borderWidth: 1
          }
        ]
      },
      barChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            barPercentage: 1,
            gridLines: {
              display: true,
              color: 'rgba(0, 0, 0, 0.1)'
            }
          }],
          yAxes: [{
            gridLines: {
              display: true,
              color: 'rgba(0, 0, 0, 0.1)'
            },
            ticks: {
              beginAtZero: true
            }
          }]
        }
      },
      pieChartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
          {
            data: [300, 50, 100, 40, 120, 24, 52],
            backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360', '#ac64ad'],
            hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774', '#da92db']
          }
        ]
      },
      pieChartOptions: {
        responsive: true,
        maintainAspectRatio: false
      },
      lineChartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
          {
            label: '#1',
            backgroundColor: 'rgba(245, 74, 85, 0.5)',
            data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
            label: '#2',
            backgroundColor: 'rgba(90, 173, 246, 0.5)',
            data: [12, 42, 121, 56, 24, 12, 2]
          },
          {
            label: '#3',
            backgroundColor: 'rgba(245, 192, 50, 0.5)',
            data: [2, 123, 154, 76, 54, 23, 5]
          }
        ]
      },
      lineChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            gridLines: {
              display: true,
              color: 'rgba(0, 0, 0, 0.1)'
            }
          }],
          yAxes: [{
            gridLines: {
              display: true,
              color: 'rgba(0, 0, 0, 0.1)'
            }
          }]
        }
      },
      radarChartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
          {
            label: '#1',
            backgroundColor: 'rgba(245, 74, 85, 0.5)',
            data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
            label: '#2',
            backgroundColor: 'rgba(90, 173, 246, 0.5)',
            data: [12, 42, 121, 56, 24, 12, 2]
          },
          {
            label: '#3',
            backgroundColor: 'rgba(245, 192, 50, 0.5)',
            data: [2, 123, 154, 76, 54, 23, 5]
          }
        ]
      },
      radarChartOptions: {
        responsive: true,
        maintainAspectRatio: false
      },
      doughnutChartData: {
        labels: ['Red', 'Green', 'Yellow', 'Grey', 'Dark Grey'],
        datasets: [
          {
            data: [300, 50, 100, 40, 120],
            backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
            hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774']
          }
        ]
      },
      doughnutChartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cascading-admin-card {
  margin: 20px 0;
}
.cascading-admin-card .admin-up {
  margin-left: 4%;
  margin-right: 4%;
  margin-top: -20px;
}
.cascading-admin-card .admin-up .fas,
.cascading-admin-card .admin-up .far {
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.2), 0 2px 13px 0 rgba(0, 0, 0, 0.19);
  padding: 1.7rem;
  font-size: 2rem;
  color: #fff;
  text-align: left;
  margin-right: 1rem;
  border-radius: 3px;
}
.cascading-admin-card .admin-up .data {
  float: right;
  margin-top: 2rem;
  text-align: right;
}
.admin-up .data p {
  color: #999999;
  font-size: 12px;
}
.classic-admin-card .card-body {
  color: #fff;
  margin-bottom: 0;
  padding: 0.9rem;
}
.classic-admin-card .card-body p {
  font-size: 13px;
  opacity: 0.7;
  margin-bottom: 0;
}
.classic-admin-card .card-body h4 {
  margin-top: 10px;
}
.card-progress{
    width: 65%;
    margin: 20px auto;
    padding-left: 60px !important;
}
.box-progress{
  height:30px;
}
.first-text{
    right: 60px;
    position: relative;
    top: 15px;
}
.progress-size{
    width: 60%;
    left: 110px;
    position: relative;
    border-radius: 10px;
    height: 13px;
}
.progress-cantidad{
    position: relative;
    top: -20px;
    right: -470px;
    width:max-content;
}
</style>
