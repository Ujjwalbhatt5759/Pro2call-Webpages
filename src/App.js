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
import Terms from "./pages/sprint_1/terms";


import ClientBookingscheduledDetailsnew from "./pages/sprint_1/client-BookingscheduledDetailsnew";

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
import ServiceproviderindividualAccountTimeslot from "./pages/sprint_2/serviceprovider-individualAccountTimeslot";

//sprint_3
import ServiceproviderServicesScheduled from "./pages/sprint_3/serviceprovider-servicesScheduled";
import ServiceproviderServicesScheduleddetails from "./pages/sprint_3/serviceprovider-serviceScheduleddetails";
import ServiceproviderServicesReScheduledconfirmed from "./pages/sprint_3/serviceprovider-serviceRescheduledconfirmed";
import ServiceproviderServicesCancelbookingconfirmed from "./pages/sprint_3/serviceprovider-serviceCancelbookingconfirmed";
import ServiceproviderServicesPaymentpending from "./pages/sprint_3/serviceprovider-servicesPaymentpending";
import ServiceproviderServicesPaymentpendingdetails from "./pages/sprint_3/serviceprovider-servicePaymentpendingdetails";
import ServiceproviderServicesHistory from "./pages/sprint_3/serviceprovider-servicesHistory";
import ServiceproviderServicesHistoryDetailsreview from "./pages/sprint_3/serviceprovider-serviceHistoryDetailsreview";
import ServiceproviderServicesHistoryDetailsAlreadyreviewed from "./pages/sprint_3/serviceprovider-serviceHistoryDetailsAlreadyreviewed";
import ClientBookingscheduled from "./pages/sprint_3/client-Bookingscheduled";
import ClientBookingscheduledDetails from "./pages/sprint_3/client-BookingscheduledDetails";
import ClientBookingscheduledDetailsInvoice from "./pages/sprint_3/client-BookingscheduledDetailsInvoice";
import ClientBookingdetailsReScheduledconfirmed from "./pages/sprint_3/client-BookingscheduledRescheduledconfirmed";
import ClientBookingdetailsCancelconfirmed from "./pages/sprint_3/client-Bookingscheduled-Canceconfirmed";
import ClientBookingPendingpayment from "./pages/sprint_3/client-BookingPaymentpending";
import ClientBookingPaymentpendingDetails from "./pages/sprint_3/clinet-BookingPaymentpendingDetails";
import ClientBookingPaymentpendingDetailscheckout from "./pages/sprint_3/client-BookingPaymentpendingDetailscheckout";
import ClientBookingPastdetails from "./pages/sprint_3/clinet-BookingPastdetails";
import ClinetBookingpast from "./pages/sprint_3/client-Bookingpast";


// sprint-4
import ServiceproviderHirestep1 from "./pages/sprint_4/serviceprovider-Hirestep1";
import ServiceproviderHirestep2 from "./pages/sprint_4/serviceprovider-Hirestep2";
import ServiceproviderHirestep3 from "./pages/sprint_4/serviceprovider-Hirestep3";
import ServiceproviderHirestep4 from "./pages/sprint_4/serviceprovider-Hirestep4";
import ServiceproviderHireReviewproject from "./pages/sprint_4/serviceprovider-HireReviewproject";
import ServiceproviderHireReviewprojectmilestone from "./pages/sprint_4/serviceprovider-HireReviewproject -milestone";
import ServiceproviderHirereviewprojectCheckout from "./pages/sprint_4/serviceprovider-HireReviewprojectCheckout";
import ServiceproviderHirereviewprojectCheckoutThankyou from "./pages/sprint_4/serviceprovider-HireReviewprojectCheckout - Thankyou";
import ServiceproviderindividualBrowse from "./pages/sprint_4/serviceprovider-individualBrowse";
import ServiceproviderindividualBrowseprojectFixed from "./pages/sprint_4/serviceproviderIndividual-BrowseprojectFixed";
import ServiceproviderindividualBrowseprojectHourly from "./pages/sprint_4/serviceproviderIndividual-BrowseprojectHourly";
import ServiceproviderindividualBrowseprojectFixedBidders from "./pages/sprint_4/serviceproviderIndividual-BrowseprojectFixedBidders";
import ServiceproviderindividualBrowseprojectdeatialsBidsubmitted from "./pages/sprint_4/serviceprovider-individual-BrowseprojectdetailsBidsubmitted";


// sprint 5
import ClientprojectPosted from "./pages/sprint_5/client-projectPosted";
import ClientprojectPostedDetails from "./pages/sprint_5/client-projcetPostedDetails";
import ClientprojectPostedDetailsbidders from "./pages/sprint_5/client-projcetPostedDetailsbidders";
import ClientprojectPostedDetailsInvitebidders from "./pages/sprint_5/client-projcetPostedDetails-Invitebidders";
import ClientprojectPostedDetailsEditproject from "./pages/sprint_5/client-projectPostedDetails-Editproject";
import ClientProjectInprogress from "./pages/sprint_5/client-ProjectInprogress";
import ClientProjectInprogressdetails from "./pages/sprint_5/clientProjectinprogress-details";
import ClientProjectInprogressdetailsMilestonepaid from "./pages/sprint_5/clientProjectinprogress-detailsMilestonespaid";
import ClientProjectInprogressdetailsOnhold from "./pages/sprint_5/clientProjectinprogress-detailsOnhold";
import ClientprojectPast from "./pages/sprint_5/client-projectPast";
import ClientProjectpastDetailsclose from "./pages/sprint_5/clientProjectpast-Detailsclose";

import ServiceproviderindividualProjectMybids from "./pages/sprint_5/serviceprovider-individualProjectsMybids";
import ServiceproviderindividualProjectMybidsDetailswithchat from "./pages/sprint_5/serviceproviderIndividualProjectMybids-Detailswithchat";
import ServiceproviderindividualProjectMybidsDetailswithoutchat from "./pages/sprint_5/serviceproviderIndividualProjectMybids-Detailswithoutchat";
import ServiceproviderindividualProjectMybidsDetailsbidders from "./pages/sprint_5/serviceproviderIndividualProjectMybids-Detailsbidders";
import ServiceproviderindividualProjectMybidsDetailsbidwithdrawn from "./pages/sprint_5/serviceproviderIndividualProjectMybids-Detailsbidwithdrawn";
import ServiceproviderindividualProjectopen from "./pages/sprint_5/serviceproviderIndividual-Projectopen";
import ServiceproviderindividualProjectopenDetails from "./pages/sprint_5/serviceproviderIndividual-ProjectopenDetails";
import ServiceproviderindividualProjectopenDetailsmilestoneCompleted from "./pages/sprint_5/serviceproviderIndividual-ProjectopenDetailsmilestoneCompleted";
import ServiceproviderindividualProjectopenDetailsOnhold from "./pages/sprint_5/serviceproviderIndividual-ProjectopenDetailsOnhold";
import ServiceproviderindividualProjectopenDetailsHourlysheet from "./pages/sprint_5/serviceproviderIndividual-ProjectopenDetailsHourlysheet";
import ServiceproviderindividualProjectpast from "./pages/sprint_5/serviceprovider-individualProjectspast";
import ServiceproviderindividualProjectpastDetails from "./pages/sprint_5/serviceproviderIndividual-ProjectPast-Details";

// sprint 6
import ServiceproviderCompanyaccountTeamMember from "./pages/sprint_6/serviceprovider-companyaccount-TeamMember-";

// sprint 7
import ClientAccount from "./pages/sprint_7/client-account";
import ServiceproviderindividualProfilesetting from "./pages/sprint_7/serviceproviderindividual-AccountProfilesetting";
import ServiceproviderindividualAccount from "./pages/sprint_7/serviceproviderindividual-account";
import ServiceproviderindividualSetting from "./pages/sprint_7/serviceproviderindividual-Accountsetting";
import ServiceproviderindividualAccountupdateKYC from "./pages/sprint_7/serviceproviderindividual-AccountupdateKYC";
import ServiceproviderindividualAccountcategoryandskills from "./pages/sprint_7/serviceproviderindividual-Accountcategory&skills";
import ServiceproviderCompanyAccount from "./pages/sprint_7/serviceproviderCompany-account";
import ServiceproviderCompanyAccountprofile from "./pages/sprint_7/serviceproviderCompany-Accountprofile";
import ServiceproviderCompanyAccountKYC from "./pages/sprint_7/serviceproviderCompany-AccountKYC";
import ServiceproviderComapanyAccountcategoryandskills from "./pages/sprint_7/serviceproviderCompany-Accountcategory&skills";
import ServiceproviderindividualProfileswitch from "./pages/sprint_7/serviceproviderindividual-Profileswitch";
import ServiceproviderindividualSelectorhire from "./pages/sprint_7/serviceproviderindividual-selectorHire";
import ServiceproviderindividualSelectorbrowse from "./pages/sprint_7/serviceproviderindividual-selectorBrowse";

// sprint 8
import ClientsupportOpen from "./pages/sprint_8/clientsupport-open";
import Clientsupportresolved from "./pages/sprint_8/clientsupport-openresloved";
import ClientSave from "./pages/sprint_8/client-save";
import ClientreportsService from "./pages/sprint_8/clientreports-service";
import ClientreportsProjects from "./pages/sprint_8/clientreports-project";
import ServiceproviderindividaulSupportOpen from "./pages/sprint_8/serviceproviderindividual-supportopen";
import ServiceproviderindividualSupportresolved from "./pages/sprint_8/serviceproviderinidividual-supportresolved";
import Serviceproviderindividualsaved from "./pages/sprint_8/serviceproviderinidividual-saved";
import ServiceproviderindividaulReportsServices from "./pages/sprint_8/serviceproviderindividaul-reportservices";
import ServiceproviderindividualReportsProjects from "./pages/sprint_8/serviceproviderindividual-reportsprojects";



// sprint9
import ServiceproviderindividualEarnigsProjects from "./pages/sprint_9/serviceproviderindividual-earningprojects";
import ServiceproviderindividualEarningprojectsDetails from "./pages/sprint_9/serviceproviderIndividual-earningproject-Details";
import ServiceproviderindividualEarnigsServices from "./pages/sprint_9/serviceproviderindividual-earningservices";
import ServiceproviderindividualEarningsServicesDetails from "./pages/sprint_9/serviceproviderindividual-earningsService-detals";
import ClientexpensesProjects from "./pages/sprint_9/clientexpense-project";
import ClientexpensesprojectsDetails from "./pages/sprint_9/clientexpense-projectdetails";
import ClientexpenseServiceDetails from "./pages/sprint_9/clientexpense-Servicedetals";
import ClientexpensesServices from "./pages/sprint_9/clientexpense-services";



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home/>} />  
        <Route path='/login' exact element={<Login/>} /> 
        <Route path='/password' exact element={<Password/>} /> 
        <Route path='/ClientBookingscheduledDetailsnew' exact element={<ClientBookingscheduledDetailsnew/>} /> 
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
        <Route path='/terms' exact element={<Terms/>} />

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
        <Route path='/ServiceproviderindividualAccountTimeslot' exact element={<ServiceproviderindividualAccountTimeslot/>} />




        {/* sprint-3 */}
        <Route path='/ServiceproviderServicesScheduled' exact element={<ServiceproviderServicesScheduled/>} />
        <Route path='/ServiceproviderServicesScheduleddetails' exact element={<ServiceproviderServicesScheduleddetails/>} />
        <Route path='/ServiceproviderServicesReScheduledconfirmed' exact element={<ServiceproviderServicesReScheduledconfirmed/>} />
        <Route path='/ServiceproviderServicesCancelbookingconfirmed' exact element={<ServiceproviderServicesCancelbookingconfirmed/>} />
        <Route path='/ServiceproviderServicesPaymentpending' exact element={<ServiceproviderServicesPaymentpending/>} />
        <Route path='/ServiceproviderServicesPaymentpendingdetails' exact element={<ServiceproviderServicesPaymentpendingdetails/>} />
        <Route path='/ServiceproviderServicesHistory' exact element={<ServiceproviderServicesHistory/>} />
        <Route path='/ServiceproviderServicesHistoryDetailsreview' exact element={<ServiceproviderServicesHistoryDetailsreview/>} />
        <Route path='/ServiceproviderServicesHistoryDetailsAlreadyreviewed' exact element={<ServiceproviderServicesHistoryDetailsAlreadyreviewed/>} />
        <Route path='/ClientBookingscheduled' exact element={<ClientBookingscheduled/>} />
        <Route path='/ClientBookingscheduledDetails' exact element={<ClientBookingscheduledDetails/>} />
        <Route path='/ClientBookingscheduledDetailsInvoice' exact element={<ClientBookingscheduledDetailsInvoice/>} />
        <Route path='/ClientBookingdetailsReScheduledconfirmed' exact element={<ClientBookingdetailsReScheduledconfirmed/>} />
        <Route path='/ClientBookingdetailsCancelconfirmed' exact element={<ClientBookingdetailsCancelconfirmed/>} />
        <Route path='/ClientBookingPendingpayment' exact element={<ClientBookingPendingpayment/>} />
        <Route path='/ClientBookingPaymentpendingDetails' exact element={<ClientBookingPaymentpendingDetails/>} />
        <Route path='/ClientBookingPaymentpendingDetailscheckout' exact element={<ClientBookingPaymentpendingDetailscheckout/>} />
        <Route path='/ClientBookingPastdetails' exact element={<ClientBookingPastdetails/>} />
        <Route path='/ClinetBookingpast' exact element={<ClinetBookingpast/>} />

        {/* sprint-4 */}
        <Route path='/ServiceproviderHirestep1' exact element={<ServiceproviderHirestep1/>} />
        <Route path='/ServiceproviderHirestep2' exact element={<ServiceproviderHirestep2/>} />
        <Route path='/ServiceproviderHirestep3' exact element={<ServiceproviderHirestep3/>} />
        <Route path='/ServiceproviderHirestep4' exact element={<ServiceproviderHirestep4/>} />
        <Route path='/ServiceproviderHireReviewproject' exact element={<ServiceproviderHireReviewproject/>} />
        <Route path='/ServiceproviderHireReviewprojectmilestone' exact element={<ServiceproviderHireReviewprojectmilestone/>} />
        <Route path='/ServiceproviderHirereviewprojectCheckout' exact element={<ServiceproviderHirereviewprojectCheckout/>} />
        <Route path='/ServiceproviderHirereviewprojectCheckoutThankyou' exact element={<ServiceproviderHirereviewprojectCheckoutThankyou/>} />
        <Route path='/ServiceproviderindividualBrowse' exact element={<ServiceproviderindividualBrowse/>} />
        <Route path='/ServiceproviderindividualBrowseprojectFixed' exact element={<ServiceproviderindividualBrowseprojectFixed/>} />
        <Route path='/ServiceproviderindividualBrowseprojectHourly' exact element={<ServiceproviderindividualBrowseprojectHourly/>} />
        <Route path='/ServiceproviderindividualBrowseprojectFixedBidders' exact element={<ServiceproviderindividualBrowseprojectFixedBidders/>} />
        <Route path='/ServiceproviderindividualBrowseprojectdeatialsBidsubmitted' exact element={<ServiceproviderindividualBrowseprojectdeatialsBidsubmitted/>} />

        {/* sprint 5 */}
        <Route path='/ClientprojectPosted' exact element={<ClientprojectPosted/>} />
        <Route path='/ClientprojectPostedDetails' exact element={<ClientprojectPostedDetails/>} />
        <Route path='/ClientprojectPostedDetailsbidders' exact element={<ClientprojectPostedDetailsbidders/>} />
        <Route path='/ClientprojectPostedDetailsInvitebidders' exact element={<ClientprojectPostedDetailsInvitebidders/>} />
        <Route path='/ClientprojectPostedDetailsEditproject' exact element={<ClientprojectPostedDetailsEditproject/>} />
        <Route path='/ClientProjectInprogress' exact element={<ClientProjectInprogress/>} />
        <Route path='/ClientProjectInprogressdetails' exact element={<ClientProjectInprogressdetails/>} />
        <Route path='/ClientProjectInprogressdetailsMilestonepaid' exact element={<ClientProjectInprogressdetailsMilestonepaid/>} />
        <Route path='/ClientProjectInprogressdetailsOnhold' exact element={<ClientProjectInprogressdetailsOnhold/>} />
        <Route path='/ClientprojectPast' exact element={<ClientprojectPast/>} />
        <Route path='/ClientProjectpastDetailsclose' exact element={<ClientProjectpastDetailsclose/>} />

        <Route path='/ServiceproviderindividualProjectMybids' exact element={<ServiceproviderindividualProjectMybids/>} />
        <Route path='/ServiceproviderindividualProjectMybidsDetailswithchat' exact element={<ServiceproviderindividualProjectMybidsDetailswithchat/>} />
        <Route path='/ServiceproviderindividualProjectMybidsDetailswithoutchat' exact element={<ServiceproviderindividualProjectMybidsDetailswithoutchat/>} />
        <Route path='/ServiceproviderindividualProjectMybidsDetailsbidders' exact element={<ServiceproviderindividualProjectMybidsDetailsbidders/>} />
        <Route path='/ServiceproviderindividualProjectMybidsDetailsbidwithdrawn' exact element={<ServiceproviderindividualProjectMybidsDetailsbidwithdrawn/>} />
        <Route path='/ServiceproviderindividualProjectopen' exact element={<ServiceproviderindividualProjectopen/>} />
        <Route path='/ServiceproviderindividualProjectopenDetails' exact element={<ServiceproviderindividualProjectopenDetails/>} />
        <Route path='/ServiceproviderindividualProjectopenDetailsmilestoneCompleted' exact element={<ServiceproviderindividualProjectopenDetailsmilestoneCompleted/>} />
        <Route path='/ServiceproviderindividualProjectopenDetailsOnhold' exact element={<ServiceproviderindividualProjectopenDetailsOnhold/>} />
        <Route path='/ServiceproviderindividualProjectopenDetailsHourlysheet' exact element={<ServiceproviderindividualProjectopenDetailsHourlysheet/>} />
        <Route path='/ServiceproviderindividualProjectpast' exact element={<ServiceproviderindividualProjectpast/>} />
        <Route path='/ServiceproviderindividualProjectpastDetails' exact element={<ServiceproviderindividualProjectpastDetails/>} />

        {/* sprint 6 */}
        <Route path='/ServiceproviderCompanyaccountTeamMember' exact element={<ServiceproviderCompanyaccountTeamMember/>} />

        {/* sprint 7 */}
        <Route path='/ClientAccount' exact element={<ClientAccount/>} />
        <Route path='/ServiceproviderindividualProfilesetting' exact element={<ServiceproviderindividualProfilesetting/>} />
        <Route path='/ServiceproviderindividualAccount' exact element={<ServiceproviderindividualAccount/>} />
        <Route path='/ServiceproviderindividualSetting' exact element={<ServiceproviderindividualSetting/>} />
        <Route path='/ServiceproviderindividualAccountupdateKYC' exact element={<ServiceproviderindividualAccountupdateKYC/>} />
        <Route path='/ServiceproviderindividualAccountcategoryandskills' exact element={<ServiceproviderindividualAccountcategoryandskills/>} />
        <Route path='/ServiceproviderCompanyAccount' exact element={<ServiceproviderCompanyAccount/>} />
        <Route path='/ServiceproviderCompanyAccountprofile' exact element={<ServiceproviderCompanyAccountprofile/>} />
        <Route path='/ServiceproviderCompanyAccountKYC' exact element={<ServiceproviderCompanyAccountKYC/>} />
        <Route path='/ServiceproviderComapanyAccountcategoryandskills' exact element={<ServiceproviderComapanyAccountcategoryandskills/>} />
        <Route path='/ServiceproviderindividualProfileswitch' exact element={<ServiceproviderindividualProfileswitch/>} />
        <Route path='/ServiceproviderindividualSelectorhire' exact element={<ServiceproviderindividualSelectorhire/>} />
        <Route path='/ServiceproviderindividualSelectorbrowse' exact element={<ServiceproviderindividualSelectorbrowse/>} />

        {/*sprint 8*/}
        <Route path='/ClientsupportOpen' exact element={<ClientsupportOpen/>} />
        <Route path='/Clientsupportresolved' exact element={<Clientsupportresolved/>} />
        <Route path='/ClientSave' exact element={<ClientSave/>} />
        <Route path='/ClientreportsService' exact element={<ClientreportsService/>} />
        <Route path='/ClientreportsProjects' exact element={<ClientreportsProjects/>} />

        <Route path='/ServiceproviderindividaulSupportOpen' exact element={<ServiceproviderindividaulSupportOpen/>} />
        <Route path='/ServiceproviderindividualSupportresolved' exact element={<ServiceproviderindividualSupportresolved/>} />
        <Route path='/Serviceproviderindividualsaved' exact element={<Serviceproviderindividualsaved/>} />
        <Route path='/ServiceproviderindividaulReportsServices' exact element={<ServiceproviderindividaulReportsServices/>} />
        <Route path='/ServiceproviderindividualReportsProjects' exact element={<ServiceproviderindividualReportsProjects/>} />

        {/* sprint9 */}
        <Route path='/ServiceproviderindividualEarnigsProjects' exact element={<ServiceproviderindividualEarnigsProjects/>} />
        <Route path='/ServiceproviderindividualEarningprojectsDetails' exact element={<ServiceproviderindividualEarningprojectsDetails/>} />
        <Route path='/ServiceproviderindividualEarnigsServices' exact element={<ServiceproviderindividualEarnigsServices/>} />
        <Route path='/ServiceproviderindividualEarningsServicesDetails' exact element={<ServiceproviderindividualEarningsServicesDetails/>} />
        <Route path='/ClientexpensesProjects' exact element={<ClientexpensesProjects/>} />
        <Route path='/ClientexpensesprojectsDetails' exact element={<ClientexpensesprojectsDetails/>} />
        <Route path='/ClientexpenseServiceDetails' exact element={<ClientexpenseServiceDetails/>} />
        <Route path='/ClientexpensesServices' exact element={<ClientexpensesServices/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
