import {test as base,expect} from "@playwright/test"
import LoginPage from "../PageObjectModel/LoginPage"
import logindata from "../TestData/loginData.json"
import HomePage from "../PageObjectModel/HomePage"
const test=base.extend({
    loginFixture:async({page},use)=>{
         let Login= new LoginPage(page)
         let home= new HomePage(page)
  let url= logindata.url
   let email=logindata.email
   let password= logindata.password
   //launching url
   await page.goto(`${process.env.BASE_URL}`)
   //navigating to login page
   await home.loginTab.click()
   await Login.emailTextfield.fill(`${process.env.EMAIL}`)
   await Login.passwordTextfield.fill(`${process.env.PASSWORD}`)
   await Login.loginButton.click()

   await use()
    }
})
export{test,expect} 