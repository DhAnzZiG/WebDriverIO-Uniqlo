import { browser, $, expect, } from '@wdio/globals'

class LandingPage{
    //elemen locator
    
    get afterLogin() { return $('[role="listbox"]')}
    get gotoLandingPage() { return $('[data-label="logo"]') }
    get gotoManCategory() { return $('[data-test="men-navItem"]')}
    get btnCari() { return $('._1Gc8KZDdnX9wdYoX_JpHvw')}

    get SearchNav() { return $('.fr-searchform-btn')}
    get dataSearch() {return $('[data-test="product-card-description"]')}
    
    get iconAkun() { return $('a[title="Masuk"]') }

    get iconWish() { return $('//a[@title="Wishlist"]') }
    get dataWish() { return $('.fr-popup-confirm-contents')}
    get closeWish() { return $('.close-btn') }
    get iconWishBadge() { return $('span[aria-label="Wishlist"]') }

    get iconCart() { return $('a[title="Keranjang"]') }
    get emptyCart() { return $('//div[@class="fr-text fr-system-text-l"]') }

    get CategoryLongSleeve() { return $('[data-label="l2_m_featuredcategory_longsleeveshirts"]') }
    get PageTitleLongSleeve() { return $('//h1[@class="fr-head h1 mt-m mb-m h1"]')}

    
    get btnWish() { return $('//a[@data-label="E466942-000"]//div[contains(@class, "favorite large swiper-no-swiping")]//button[@aria-label="Favorite"]')}
    get badgeWish() { return $('.fr-badge') }

    get SatuWishlist() { return $('a[href="/id/id/products/E466942-000?colorCode=COL09"]') }
    get CodeWishlist() { return $('//dd[contains(text(),"466942")]') }

    get prodDetil() { return $('//a[@data-label="E455365-000"]') }
    //get kodProd() { return $('') }
    get warnaKuning() { return $('[data-test="YELLOW"]') }
    get ukuran3XL() { return $('[data-test="3XL"]') }
    
    get masukKeranjang() { return $('[data-test="tambahkan-ke-keranjang-button"]') }
    get lihatKeranjang() { return $('[data-test="lihat-keranjang-button"]') }
    get closeOrd() { return $('.close-btn')  }
    
    get badgeCart() { return $('.fr-badge') }

    get orderCart() { return $('//dl[@class="fr-definition-list inline"]//dd[@class="fr-definition-list-description"]') }
    get orderProduct() { return $('a[href="/id/id/products/E455365-000?colorCode=COL42&sizeCode=SMA008&pldCode=PTB000"]') }
    
    
    
    //page actions
    
    async LandingWeb(){
        await browser.url('https://www.uniqlo.com/id/id/')
    }

    async LogoUniqlo(){
        await this.gotoLandingPage.click()
        await browser.url('https://www.uniqlo.com/id/id/')
    }

    async ManWeb(){
        await this.gotoManCategory.click()
        await browser.url('https://www.uniqlo.com/id/id/men')
    }

    async FiturSearch(namaBarangCari){
        await this.SearchNav.click()
        const cari = await $('#searchInput')
        await cari.setValue(namaBarangCari)
        await this.btnCari.click()
    }

    async NavAkun(){
        await this.iconAkun.click()
        await browser.url('https://www.uniqlo.com/id/auth/v1/login')
    }

    async NavWish(){
        await this.iconWish.click()
        await browser.url('https://www.uniqlo.com/id/id/wishlist/')
        await this.closeWish.click()
    }


    async NavCart(){
        await this.iconCart.click()
        await browser.url('https://www.uniqlo.com/id/id/cart/')
    }


    async LongSleeveCat(){
        await this.CategoryLongSleeve.click()
        await browser.url('https://www.uniqlo.com/id/id/men/tops/casual-shirts-long-sleeve') 
    }

    async get1WishProduct(){
        await this.btnWish.scrollIntoView()
        await this.btnWish.waitForClickable();
        await this.btnWish.click()
    }
    async unWish(){
        await this.btnWish.click()
    }

    async getWishProduct(){
        await this.btnWish.scrollIntoView()
        await this.btnWish.waitForClickable();
        await this.btnWish.click()

    }
    async toWishProduct(){
        await this.iconWishBadge.click()
        await this.closeWish.click()
    }

    async getCodeWish(){
        const kodewish= this.CodeWishlist.getText()
        return kodewish
    }

    async get1Product(){
        await this.prodDetil.scrollIntoView()
        await this.prodDetil.waitForClickable();
        await this.prodDetil.click()
    }
    
    async pilihProduct(){
        await this.warnaKuning.click()
        await this.ukuran3XL.click()
        //nanya gimana caranya kalo order 3

        await this.masukKeranjang.scrollIntoView()
        await this.masukKeranjang.waitForClickable();
        await this.masukKeranjang.click()

        await this.closeOrd.click()
    }

    async BeliProduct(){
        await this.warnaKuning.click()
        await this.ukuran3XL.click()
        //nanya gimana caranya kalo order 3

        await this.masukKeranjang.scrollIntoView()
        await this.masukKeranjang.waitForClickable();
        await this.masukKeranjang.click()

        await this.lihatKeranjang.click()
    }

    async kodeProduct(){
        const bbb = await this.prodDetil.getAttribute('data-label')
        return bbb
    }
    
    async getCodeCart(){
        const aaa = await this.orderCart.getText()
        return aaa
    }

    

}

export default new LandingPage()