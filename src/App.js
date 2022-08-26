import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './pages/sprint_1/index'; 
import Login from './pages/sprint_1/login'; 
import Password from './pages/sprint_1/password'; 
import Selector from "./pages/sprint_1/clientsinup-selector";
import Clientsignupform from "./pages/sprint_1/clientsignup-signupform";
import Clientsignupprofile from "./pages/sprint_1/clientsignup-profileimg";
import ClientsignupUploaded from "./pages/sprint_1/clientsignup-uploaded";
import Selectorhire from "./pages/sprint_1/selector-hire";
import Selectorbrowse from "./pages/sprint_1/selector-browse";
import ServiceproviderSelector from "./pages/sprint_1/serviceprovider-selector";
import ServiceproviderSignupform from "./pages/sprint_1/serviceprovider-signupform";
import ServiceproviderProfile from "./pages/sprint_1/serviceprovider-profile";
import ServiceproviderUploaded from "./pages/sprint_1/serviceprovider-uploaded";
import ServiceprovicerOnsiteOffsite from "./pages/sprint_1/serviceprovider-(onsiteoroffsite)";
import ServiceproviderProfilebuilder1 from "./pages/sprint_1/serviceprovider-profilebuilder1";
import ServiceproviderProfilebuilder2 from "./pages/sprint_1/serviceprovider-profilebuilder2";
import ServiceproviderProfilebuilder3 from "./pages/sprint_1/serviceprovider-profilebuilder3";
import ServiceproviderProfilebuilder4 from "./pages/sprint_1/serviceprovider-profilebuilder4";
import ServiceproviderSignupformCompany from "./pages/sprint_1/serviceprovider-signupform(company)";
import ServiceproviderCompanylogo from "./pages/sprint_1/serviceprovider-companylogo";
import ServiceproviderCompanyuploaded from "./pages/sprint_1/serviceprovider-companyUploaded";
import ServiceproviderTeamMemberform1 from "./pages/sprint_1/serviceprovider-teamMemberform";
import ServiceproviderTeamMemberform2 from "./pages/sprint_1/serviceprovider-teamMemberform2";
import ServiceproviderTeamMemberform3 from "./pages/sprint_1/serviceprovider-teamMemberform3";
import ServiceproviderTeamMemberform4 from "./pages/sprint_1/serviceprovider-teamMemberform4";
import ServiceproviderSignupformFull from "./pages/sprint_1/serviceprovider-signupformFull";
import ServiceproviderCompanyfull from "./pages/sprint_1/serviceprovider-companyFull";

// Sprint2
import Addnew from "./pages/sprint_2/serviceprovider-addnew";
import Editservice from "./pages/sprint_2/serviceprovider-editservice";
import Listed from "./pages/sprint_2/serviceprovider-listed";
import ServiceproviderListeddetails from "./pages/sprint_2/serviceprovider-listedDetails";
import Browseservice from "./pages/sprint_2/browseservice";
import Browseservicefilterapplied from "./pages/sprint_2/browseservice-filter-applied";
import Browseservicesorting from "./pages/sprint_2/browseservice-sorting";
import Clientbrowsse from "./pages/sprint_2/client-browse";
import Clientbrowsecheckout from "./pages/sprint_2/client-browseCheckout";
import Browseserviceprojectdetails2 from "./pages/sprint_2/Browseservice-project-details2";
import BrowseserviceprojectdetailsHourly from "./pages/sprint_2/Browseservice-project-detailsHourly";
import Browseserviceprojectdetails1 from "./pages/sprint_2/Browseservice-project-details1";
import ClientbrowseDetails from "./pages/sprint_2/client-browseDetails";
import ClientbrowseDetailsservices from "./pages/sprint_2/client-browseDetails(services)";
import ClientbrowsecheckoutConfirmed from "./pages/sprint_2/client-browseCheckoutconfirmed";
import ProjectdeatilPayment from "./pages/sprint_2/projectdetail-payment";
import ProjectdeatilPaymentconfirmed from "./pages/sprint_2/projectdetail-paymentconfirmed";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home/>} />  
        <Route path='/login' exact element={<Login/>} /> 
        <Route path='/password' exact element={<Password/>} /> 
        <Route path='/Selector' exact element={<Selector/>} /> 
        <Route path='/Clientsignupform' exact element={<Clientsignupform/>} />
        <Route path='/Clientsignupprofile' exact element={<Clientsignupprofile/>} />
        <Route path='/ClientsignupUploaded' exact element={<ClientsignupUploaded/>} />
        <Route path='/Selectorhire' exact element={<Selectorhire/>} />
        <Route path='/Selectorbrowse' exact element={<Selectorbrowse/>} />
        <Route path='/ServiceproviderSelector' exact element={<ServiceproviderSelector/>} />
        <Route path='/ServiceproviderSignupform' exact element={<ServiceproviderSignupform/>} />
        <Route path='/ServiceproviderProfile' exact element={<ServiceproviderProfile/>} />
        <Route path='/ServiceproviderUploaded' exact element={<ServiceproviderUploaded/>} />
        <Route path='/ServiceprovicerOnsiteOffsite' exact element={<ServiceprovicerOnsiteOffsite/>} />
        <Route path='/ServiceproviderProfilebuilder1' exact element={<ServiceproviderProfilebuilder1/>} />
        <Route path='/ServiceproviderProfilebuilder2' exact element={<ServiceproviderProfilebuilder2/>} />
        <Route path='/ServiceproviderProfilebuilder3' exact element={<ServiceproviderProfilebuilder3/>} />
        <Route path='/ServiceproviderProfilebuilder4' exact element={<ServiceproviderProfilebuilder4/>} />
        <Route path='/ServiceproviderSignupformCompany' exact element={<ServiceproviderSignupformCompany/>} />
        <Route path='/ServiceproviderCompanylogo' exact element={<ServiceproviderCompanylogo/>} />
        <Route path='/ServiceproviderCompanyuploaded' exact element={<ServiceproviderCompanyuploaded/>} />
        <Route path='/ServiceproviderTeamMemberform1' exact element={<ServiceproviderTeamMemberform1/>} />
        <Route path='/ServiceproviderTeamMemberform2' exact element={<ServiceproviderTeamMemberform2/>} />
        <Route path='/ServiceproviderTeamMemberform3' exact element={<ServiceproviderTeamMemberform3/>} />
        <Route path='/ServiceproviderTeamMemberform4' exact element={<ServiceproviderTeamMemberform4/>} />
        <Route path='/ServiceproviderSignupformFull' exact element={<ServiceproviderSignupformFull/>} />
        <Route path='/ServiceproviderCompanyfull' exact element={<ServiceproviderCompanyfull/>} />

        {/* Sprint2 */}
        <Route path='/Addnew' exact element={<Addnew/>} />
        <Route path='/Editservice' exact element={<Editservice/>} />
        <Route path='/Listed' exact element={<Listed/>} />
        <Route path='/ServiceproviderListeddetails' exact element={<ServiceproviderListeddetails/>} />
        {/*  */}
        <Route path='/Browseservice' exact element={<Browseservice/>} />
        <Route path='/Browseservicefilterapplied' exact element={<Browseservicefilterapplied/>} />
        <Route path='/Browseservicesorting' exact element={<Browseservicesorting/>} />
        <Route path='/Browseserviceprojectdetails2' exact element={<Browseserviceprojectdetails2/>} />
        <Route path='/BrowseserviceprojectdetailsHourly' exact element={<BrowseserviceprojectdetailsHourly/>} />
        <Route path='/Browseserviceprojectdetails1' exact element={<Browseserviceprojectdetails1/>} />
        {/*  */}
        <Route path='/Clientbrowsse' exact element={<Clientbrowsse/>} />
        <Route path='/Clientbrowsecheckout' exact element={<Clientbrowsecheckout/>} />
        <Route path='/ClientbrowseDetails' exact element={<ClientbrowseDetails/>} />
        <Route path='/ClientbrowseDetailsservices' exact element={<ClientbrowseDetailsservices/>} />
        <Route path='/ClientbrowsecheckoutConfirmed' exact element={<ClientbrowsecheckoutConfirmed/>} />

        {/*  */}
        <Route path='/ProjectdeatilPayment' exact element={<ProjectdeatilPayment/>} />
        <Route path='/ProjectdeatilPaymentconfirmed' exact element={<ProjectdeatilPaymentconfirmed/>} />

      </Routes>
    </Router>
  );
}

export default App;
