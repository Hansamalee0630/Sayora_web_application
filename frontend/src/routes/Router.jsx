import {Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import PatientDashboard from '../layouts/PatientDashboard'
import DoctorDashboard from '../layouts/DoctorDashboard'
import StaffDashboard from '../layouts/StaffDashboard'
import WebsiteLayout from '../layouts/WebsiteLayout'
import LogIn from '../pages/LogIn'
import React from 'react'
import ProtectedRoutesUser from '../utils/ProtectedRoutesUser'
import RegistrationForm from '../pages/RegistrationForm'

//pages import
//doctor
import Overview from '../pages/doctor/overviewDoctor'
import ProfileDoctor from '../pages/doctor/profileDoctor'
import ExaminationList from '@/pages/doctor/examinationList'
import ExaminationContainer from '../pages/doctor/examinationContainer'

//patient
import ProfilePatient from '../pages/patient/overviewPatient'
import PrescriptionPatient from '../pages/patient/prescriptionPatient'
import ReportPatients from '../pages/patient/reportsPatient'
import DailyUploads from '../pages/patient/dailyUploads'
import UserProfilePatient from '../pages/patient/profilePatient'



//staff
import AwarnessPrograms from '../pages/staff/addServices';



//website
import Home from '../pages/website/Home'
import ServiceMgt from '../pages/website/OverviewService'
import AddStaff from '@/pages/staff/addStaff'
import ManageStaff from '@/pages/staff/manageStaff'
import ManagePatient from '@/pages/staff/managePatient'
import AddPatient from '@/pages/staff/addPatient'
import StaffLeaves from '@/pages/staff/manageStaffLeaves'
import ApplyLeave from '@/pages/staff/applyLeave'
import MyLeaves from '@/pages/staff/myLeaves'

import ServiceHome from '../pages/website/HomeNavService'
import AwarenessProgramHome from '@/components/website/awarnessProgramsHome/';

//set routing
const Router = createBrowserRouter(
  createRoutesFromElements(
    <>   
        <Route path = "/login" element ={<LogIn />}exact />
        <Route path = "/register/:tempId" element ={<RegistrationForm />}exact />
        
        <Route path = "/" element ={<WebsiteLayout />}exact >
          <Route index element={<Home/> } exact/>
          {/*webiste routes here*/}
          <Route path="home" element={<Home/> } exact/>
          <Route path="serviceForm" element={<ServiceMgt/> } exact/>
          <Route path="service" element={<ServiceHome/> } exact/>
          <Route path="awarenessProgramHome" element={<AwarenessProgramHome/> } exact/>


        </Route>
        <Route path = "/staff" element ={<StaffDashboard />}exact >
          {/*staff dashboard routes here*/}
          <Route path="ManageStaff/add" element={<AddStaff/> } exact/>
            <Route path="ManageStaff/overview" element={<ManageStaff/> } exact/>
            <Route path="ManagePatient/add" element={<AddStaff/> } exact/>
            <Route path="ManagePatients/overview" element={<ManagePatient/> } exact/>
            <Route path="ManagePatients/add" element={<AddPatient/> } exact/>
            <Route path="ManageLeaves/overview" element={<StaffLeaves/> } exact/>
            <Route path="StaffProfile/leaves/apply" element={<ApplyLeave/> } exact/>
            <Route path="StaffProfile/leaves/my" element={<MyLeaves/> } exact/>


        </Route>

          {/*protected routes*/}
        <Route element ={<ProtectedRoutesUser />}>
          <Route path="/patient" element={<PatientDashboard /> } exact >

            //patient dashboard routes here
            <Route path="overview" element={<ProfilePatient/> } exact/>
            <Route path="prescription" element={<PrescriptionPatient/> } exact/>
            <Route path="myrecords/reportpatient" element={<ReportPatients/> } exact/>
            <Route path="myrecords/dailyuploads" element={<DailyUploads/> } exact/>
            <Route path="profile" element={<UserProfilePatient/> } exact/>
          


          </Route>

          <Route path="/doctor" element={<DoctorDashboard /> } exact>
            <Route index element={<Overview/> } exact/>
          {/*doctor dashboard routes here*/}
              <Route path="overview" element={<Overview/> } exact/>
              <Route path="profile" element={<ProfileDoctor/> } exact/>
              <Route path="examination">
                {/*examination routes here*/}
                <Route path=':id' element={<ExaminationContainer/>}></Route>
                <Route path='' element={<ExaminationList/>} exact></Route>
              </Route>
          </Route>

          
          
        </Route> 
    </>
  )

)

export default Router;