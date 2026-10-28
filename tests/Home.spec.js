import {test,expect} from"@playwright/test"
import LoginPage from "../PageObjectModel/LoginPage"
import logindata from "../TestData/loginData.json"
import HomePage from "../PageObjectModel/HomePage"
import ProductPage from "../PageObjectModel/ProductPage"

//test.describe("groupingTests",async(page)=>{
    let home
    test.beforeEach(async({page})=>{
        let Login= new LoginPage(page)
     home= new HomePage(page)
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
    })
     test.afterEach(async({page})=>{
    //logout from application
    await home.logoutButton.click()
   })

    test("assert for home page",{tag:"@smoke"},async({page})=>{
         let home= new HomePage(page)
        let hometext=home.hometext
        await expect(hometext).toHaveCSS('color', 'rgb(255, 165, 0)');
})

test("category-kids",{tag:"@smoke"},async({page})=>{
    let home= new HomePage(page)
    let Productp= new ProductPage(page)
    //click on kids category
    await home.categoryKids.click()

    //click on dress catogory
    await home.kidsDress.click()

    //assert the product page
  let kidsDress= await Productp.productPageTitle.textContent()
   await expect(Productp.productPageTitle).toContainText(kidsDress)


})
test("brand-polo",{tag:"@smoke"},async({page})=>{
    let home= new HomePage(page)
    let Productp= new ProductPage(page)

    //click on brand-polo
    await home.brandPolo.click()
    
    //assert the product page
   let polotext= await Productp.productPageTitle.textContent()
   console.log(polotext);
   await expect(await  Productp.productPageTitle.textContent()).toContainText(polotext)

})

test("discover-more",{tag:"@integration"},async({page})=>{
     let home= new HomePage(page)
    let Productp= new ProductPage(page)

    await home.brandPolo.click()
    await Productp.discoverMore.click()
    await Productp.closeDiscoverButton.click()

  // let  text=await page.locator("//span[@id='gda-search-term']").textContent()
  // console.log(text);
  
})

   // })
    
    
    
 
