import {test,expect} from"../fixture/fixtureLogin.js"
import LoginPage from "../PageObjectModel/LoginPage"
 import logindata from "../TestData/loginData.json"
import HomePage from "../PageObjectModel/HomePage"
import ProductPage from "../PageObjectModel/ProductPage"
import ProductDetailsPage from "../PageObjectModel/ProductDetailsPage"
import CartPage from "../PageObjectModel/CartPage"

    

    test("home_productDetails",{tag:"@integration"},async({page,loginFixture})=>{
        let home= new HomePage(page)
    let Productp= new ProductPage(page)
    let productDetailsp= new ProductDetailsPage(page)

    //select brand in home page
    await home.brand_allensolly.click()
    
    //select the product
    await Productp.viewProductButton.click()

    //assertfor the same product in product details page
let productName= await productDetailsp.productName.textContent()
console.log(productName);
    })

    test("productDetailsPage_cartPage",{tag:"@integration"},async({page,loginFixture})=>{
        let home= new HomePage(page)
    let Productp= new ProductPage(page)
    let productDetailsp= new ProductDetailsPage(page)
    let cartp= new CartPage(page)

    //click on product tab
    await home.productTab.click()

    //select the product
    await Productp.viewProductButton.click()

    //assertfor the same product in product details page
    let productName= await productDetailsp.productName.textContent()
    console.log(productName);

    //click on add to cart button
    await productDetailsp.addToCartButton.click()

    //assert product added to cart msg
   let addedToCartMsg=await productDetailsp.addedMessage.textContent()
   console.log(addedToCartMsg);
   await expect(productDetailsp.addedMessage).toContainText("added to cart")

   //click on view cart link
   await productDetailsp.viewCartButton.click()

   //assert cart page for the added product
   await expect(cartp.productInCart).toContainText(productName)

    await cartp.deleteCartItem.click()
   
    })

//})

