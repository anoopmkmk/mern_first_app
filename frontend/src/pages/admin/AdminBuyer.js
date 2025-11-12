import Logout from "../../components/admin/Logout";
import "../../assets/css/auth.css";
import "../../assets/vendor/bootstrap/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "../../assets/vendor/fontawesome/css/fontawesome.min.css";
import "../../assets/vendor/fontawesome/css/solid.min.css";
import "../../assets/vendor/fontawesome/css/brands.min.css";
import "../../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../../assets/css/master.css";
// import 'flag-icon-css/css/flag-icon.min.css';

import "../../assets/vendor/jquery/jquery.min.js";
import "../../assets/vendor/bootstrap/js/bootstrap.bundle.min.js";
import "../../assets/vendor/chartsjs/Chart.min.js";
import "../../assets/js/script.js";

import { useEffect } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import $ from "jquery";
import AdminHeader from "../../components/Layout/AdminHeader.js";
import AdminLeft from "../../components/Layout/AdminLeft.js";

const AdminBuyer = () => {
  return (
    <div class="wrapper">
        
      <AdminLeft/>

        <div id="body" class="active">
           
           <AdminHeader/>
           
            <div class="content">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 page-header">
                            <div class="page-pretitle">Buyer</div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  );
};

export default AdminBuyer;