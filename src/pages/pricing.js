import React from "react";
import Layout from "../components/Layout";
export default function Pricing() {
  return (
    <Layout>
      <div>
        <h2 className="text-3xl font-bold">Our Prices</h2>
        <div class="flex justify-center">
          <div class="flex justify-center">
            <div class="flex flex-col md:flex-row">
              <div class="bg-customOrange p-32 rounded-lg w-full md:w-1/3 md:mx-2 mb-4 overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-gradient-to-br from-customYellow to-transparent">
                <div class="text font-bold">QUICK 'N EASY</div>
                <ul class="text-left mt-4">
                  <li>Domain registration (.co.za / .africa)</li>
                  <li>Hosting for 24 months</li>
                  <li>6 day/week technical support</li>
                  <li>3 Pager: Home, Services, Contacts</li>
                </ul>
              </div>
              <div class="bg-customOrange p-32 rounded-lg w-full md:w-1/3 md:mx-2 mb-4 overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-gradient-to-br from-customYellow to-transparent">
                <div class="text font-bold">PRO-UPGRADE</div>
                <ul class="text-left mt-4">
                  <li>Domain registration .com</li>
                  <li>Hosting for 24 months</li>
                  <li>Up to 6 Web Pages Designed</li>
                  <li>Quarterly Content Updates</li>
                  <li>6 day/week technical support</li>
                </ul>
              </div>
              <div class="bg-customOrange p-32 rounded-lg w-full md:w-1/3 md:mx-2 mb-4 overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-gradient-to-br from-customYellow to-transparent">
                <div class="text font-bold">CUSTOMADE</div>
                <ul class="text-left mt-4">
                  <li>Domain registration .com </li>
                  <li>Hosting for 24 months</li>
                  <li>6 day/week technical support</li>
                  <li>Payment Integration + Management</li>
                  <li>Content Management System</li>
                  <li>Monthly Content Updates</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
