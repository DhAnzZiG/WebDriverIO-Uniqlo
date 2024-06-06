import { browser, $, expect } from '@wdio/globals'
import PageMan from '../pageobjects/ManLandingPage.js'
import LoginDulu from '../pageobjects/UserAuth.js'
import PageAwal from '../pageobjects/ManLandingPage.js'

describe('UJI Website UNIQLO Man', function(){
    // before('User Login Dulu', async function(){
    //     await LoginDulu.loginWeb()
    //     await LoginDulu.Proses('bangdhandy46@gmail.com', 'P@perRex123')
    //     await expect(PageAwal.afterLogin).toHaveText('Riwayat Pembelian')
    // })
    before('Sudah berada di Landing Page UNIQLO', async function(){
        await PageAwal.LandingWeb()
    })
    describe('1. Menguji Apakah Sudah di Halaman Kategori Pria', function(){
        it('Sudah di Halaman Kategori Pria', async function(){
            //Ambil Elemen yg mau di tes, disini mau tes fitur kategori Man pada Nav 
            await PageAwal.ManWeb()
            //Assertion
            await expect(browser).toHaveUrl(
                expect.stringContaining('men') 
            )
        })
    })
    describe('2. Menguji Fitur Search pada Navigasi', function(){
        it('Search Bisa diakses dg Baik', async function(){
            //Ambil Elemen yg mau di tes, disini mau tes fitur Search pada Nav
            await PageAwal.FiturSearch('Kaos Polo')
            //Assertion
            await expect(PageAwal.dataSearch).toHaveText(
                expect.stringContaining('Kaos Polo')
            )
        })
    })
    describe('3. Menguji Fitur Akun pada Navigasi', function(){
        it('Dialihkan pada laman untuk Login User', async function(){
            //Ambil Elemen yg mau di tes, disini mau tes fitur Akun pada Nav
            await PageAwal.NavAkun()
            //Assertion
            await expect(browser).toHaveUrl(
                expect.stringContaining('auth/v1/login') 
            )
            //Karena Nav tidak ada di Fitur Login, saya kembali ke Landing Page dan ke Kategori Man
            await PageAwal.LogoUniqlo()
        })
    })

    describe('4. Menguji Fitur Wishlist pada Navigasi', function(){
        it('Dialihkan pada laman Wishlist dan disarankan untuk Login', async function(){
            //Ambil Elemen yg mau di tes, disini mau tes fitur Akun pada Nav
            await PageAwal.NavWish()
            //Assertion
            await expect(PageAwal.dataWish).toHaveAttribute('class', 'fr-popup-confirm-contents')
            
        })
    })

    describe('5. Menguji Fitur Keranjang pada Navigasi', function(){
        it('Dialihkan pada laman Cart', async function(){
            //Ambil Elemen yg mau di tes, disini mau tes fitur Akun pada Nav
            await PageAwal.NavCart()
            //Assertion
            await expect(PageAwal.emptyCart).toHaveText('Keranjang Anda saat ini kosong.')
            
        })
    })

    describe('6. Menguji Fitur Search By Kategori Long Sleeve', function(){
        it('Dialihkan pada Laman Berdasarkan pilihan Kategori Long Sleeve', async function(){
            await PageAwal.ManWeb()
            await PageAwal.LongSleeveCat()
            //Assertion
            await expect(PageAwal.PageTitleLongSleeve).toHaveText(
                expect.stringContaining('KEMEJA KASUAL (LENGAN PANJANG)')
            )
            
        })
    })

    describe('7. Menguji Fitur Favorite Product Kategori New Arrival', function(){
        it('Muncul Badge pada menu Wishlist pada Nav ', async function(){
            await PageAwal.ManWeb()
            await PageAwal.get1WishProduct()
            //Assertion
            await expect(PageAwal.badgeWish).toBeDisplayed()
        })
    })

    describe('8. Menguji Fitur Favorite Product Kategori New Arrival', function(){
        it('Pada menu Wishlist, Barang Favorite sesuai dg yg di Klik Love', async function(){
            await PageAwal.ManWeb()
            await PageAwal.get1WishProduct()
            await PageAwal.NavWish()

            //Assertion
            const Kode = await PageAwal.getCodeWish()
            await expect(PageAwal.SatuWishlist).toHaveHref(
                expect.stringContaining(Kode)
            )
        })
    })

    describe('9. Menguji Fitur Tambah Product Keranjang', function(){
        it('Telah Menambah Product ke Keranjang', async function(){
            await PageAwal.ManWeb()
            await PageAwal.get1Product()
            await PageAwal.pilihProduct()

            //Assertion
            await expect(PageAwal.badgeCart).toBeDisplayed()
            //await browser.pause(5000)
        })
    })
    
    describe('10. Menguji Fitur Cart Product Kategori New Arrival', function(){
        it('Pada menu Cart, Telah ditambah Barang yang akan di Order', async function(){
            await PageAwal.ManWeb()
            await PageAwal.get1Product()
            await PageAwal.BeliProduct()
            await PageAwal.NavCart()

            //Assertion
            const KodeWarna = await PageAwal.getCodeCart()
            //console.log(KodeWarna)
            await expect(PageAwal.orderCart).toHaveText(
                expect.stringContaining(KodeWarna)
            )
        })
    })
})